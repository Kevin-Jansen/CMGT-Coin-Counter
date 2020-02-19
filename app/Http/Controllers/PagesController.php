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
        return Inertia::render('Index', [
            'prevNames' => Session::get('prevNames') ? Session::get('prevNames') : null,
            'error' => Session::get('error') ? Session::get('error') : null,
        ]);
    }

    public function fetch(Request $request)
    {
        if (empty($request->input('name'))) {
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
}
