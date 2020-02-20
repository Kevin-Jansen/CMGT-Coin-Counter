<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class PagesController extends Controller
{
    public function index()
    {
        if (isset($_GET['name'])) {
            return Redirect::to('fetch?name='.$_GET['name']);
        }

        return Inertia::render('Index', [
            'prevNames' => Session::get('prevNames') ? Session::get('prevNames') : null,
            'error' => Session::get('error') ? Session::get('error') : null,
        ]);
    }

    public function fetch(Request $request)
    {
        if (empty($request->input('name')) && !isset($_GET['name'])) {
            return Redirect::to('/');
        }

        $prevNames = null;
        if (!empty($request->input('name'))) {
            $prevNames = $request->input('name');
        } elseif (isset($_GET['name'])) {
            $prevNames = $_GET['name'];
        } else {
            return Redirect::to('/');

        }

        Session::put('prevNames', $request->input('name'));

        $count = 0;
        $names = explode('||', $request->input('name'));

        $client = new Client();
        $res = $client->request('GET', 'https://programmeren9.cmgt.hr.nl:8000/api/users');

        $data = json_decode($res->getBody()->getContents(), true);

        foreach ($names as $name) {
            if (!array_key_exists($name, $data)){
                continue;
            }
            $count += $data[$name];
        }

        if ($count === 0) {
            return Redirect::back()->with('error', 'Geen coins gevonden.');
        }

        Session::put('coinCount', $count);

        return Redirect::route('coins');
    }

    public function coins()
    {
        return Inertia::render('Coins', [
            'coinCount' => Session::get('coinCount')
        ]);
    }

    public function leaderboard() {
            $client = new Client();
            $res = $client->request('GET', 'https://programmeren9.cmgt.hr.nl:8000/api/users');

            $data = json_decode($res->getBody()->getContents(), true);

            unset($data['marleenikhounogsteedsvanje']);

            $leaderboard = [];

//            dd(array_keys($data));

            foreach (array_keys($data) as $key) {
                $leaderboard[] = ['name' => $key, 'value' => $data[$key]];
            }

            return Inertia::render('Leaderboard', [
               'leaderboard' => $leaderboard,
            ]);
    }
}
