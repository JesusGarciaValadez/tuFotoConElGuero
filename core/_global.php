<?php
class _global
{
	function __construct()
	{
		//$this->URL = "http://www.tufotoconelguero.com/gallery/test";
		$this->PATH_CSS = $this->URL."css/";
		$this->BOOTSTRAP_JS = $this->URL."bootstrap/js/bootstrap.js";
		$this->BOOTSTRAP_CSS = $this->URL."bootstrap/css/bootstrap.css";
		$this->JQUERY = $this->URL."js/jquery-1.11.0.js";
		$this->PATH_JS = $this->URL."js/";		
		$this->IMG_DASHBOARD = $this->URL."img/dashboard/";
	}
	
	function __destruct()	{	}
}

?>