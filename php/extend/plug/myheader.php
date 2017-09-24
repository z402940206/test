<?php
 /**
 * 
 */
namespace plug;

use think\Request;

 class myheader 
 {
 	static public $originarr = [
							 	'http://newtemp.yushan.com',
							 	'http://chenchen.wms.cn',
							 	];
 	static public function setheader()
 	{
 		  $ori = Request::instance()->header()['origin'];
 		  if(in_array($ori, self::$originarr)){
 		  	 header('Access-Control-Allow-Origin:'.$ori); 
             header('Access-Control-Allow-Credentials: true');
             header('Access-Control-Allow-Headers:x-requested-with,Content-Type,X-CSRF-Token');
 		  } 

         
 	}
 	
  
 }