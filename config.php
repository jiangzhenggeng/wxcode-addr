<?php
/**
 * Created by PhpStorm.
 * User: jiangzg
 * Date: 2017/5/26
 * Time: 下午10:05
 */
ini_set('display_errors',1);
error_reporting(E_ALL);

function configDir($dir,$fix='wxml',& $path_array = [] ){
    if( substr($dir,-1,1)=='/'){
        $dir = substr($dir,0,strlen($dir)-1);
    }
    $handle = opendir($dir);
    while ($file=readdir($handle)){
        if( $file!='..' && $file!='.'){
            $pg = $dir.'/'.$file;
            if( !is_dir($pg) ){
                $file_arr = explode('.',$file);
                $fxk = array_pop($file_arr);
                if( $fxk==$fix && substr($file_arr[0],0,1)!='_' ){
                    $path_array[] = preg_replace('/\.'.$fix.'$/','',$pg);
                }
            }else{
                configDir($pg,$fix,$path_array);
            }
        }
    }
    return $path_array;
}

function getAppConfig(){
    @chmod(__DIR__.'/app.json',777);
    $exp = '/\/\*[\s\S]+?\*\//';
    $app_json_string = file_get_contents(__DIR__.'/app.json');
    return json_decode(preg_replace( $exp,'', $app_json_string), true);
}

$app_config = getAppConfig();
$path_array = configDir(__DIR__.'/pages');

$path_array = array_map(function ($item){
    $item = str_replace(__DIR__.'/','',$item);
    return $item;
},$path_array);


foreach ($path_array as $k => $v ){
    if($v=='pages/index/index'){
        unset($path_array[$k]);
        array_unshift($path_array,$v);
    }
}
$app_config['pages'] = $path_array;

$CONFIG_OPTION = JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE;
file_put_contents(__DIR__.'/app.json',json_encode($app_config,$CONFIG_OPTION));


chmod(__DIR__.'/app.json',366);























