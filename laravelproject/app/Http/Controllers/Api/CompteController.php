<?php

namespace App\Http\Controllers\Api;
use App\Compte ;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


if (version_compare(PHP_VERSION, '7.2.0', '>=')) {
    // Ignores notices and reports all other kinds... and warnings
    error_reporting(E_ALL ^ E_NOTICE ^ E_WARNING);
    // error_reporting(E_ALL ^ E_WARNING); // Maybe this is enough
}
class CompteController extends Controller
{
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $compte=Compte::all();
        return response()->json($compte);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        echo"hello";
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    { //
        $compte= new Compte();
        $compte->name = $request->name;
        $compte->email = $request->email;
        $compte->natur = $request->natur;
        $compte->password = $request->password;

        $compte->save();
        return redirect('etudiant');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($name,$password)
    {
        
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }


    public function logs(request $request){
               
        $name=$request->input('name');
        $email=$request->input('email');
        $password=$request->input('password');
        $prof="prof";
        $etu="etudiant";
        $msg="not found ";
       $rq = DB ::select('select name,password,natur from compte where natur=? and name=? and password =?',[$prof,$name,$password]);
       $rq1 = DB ::select('select name,password,natur from compte where natur=? and name=? and password =?',[$etu,$name,$password]);

        
    
    if(count($rq))
    {
        //echo '<script type="text/javascript">alert("' . $name . '")</script>';
 
        
       return redirect('prof');
    }
    elseif(count($rq1)) {
        
      return redirect('etudiant');
    }
    else{
        echo '<script type="text/javascript">alert("' . $msg . '")</script>';
    }
}

public function test(request $request){
         
        

} 
}