<?php
namespace jwt;

class ExpiredException extends \UnexpectedValueException
{
	public function _initialize()
    {
    	
 		 return json_encode(['code'=>0,'msg'=>'Expired token']);
    }
	
  // return json_encode(['code'=>0,'msg'=>'Expired token']);
}
