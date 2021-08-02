<?php

    $mysql = new mysqli('127.0.0.1', 'root', 'root', 'onlineshop');
    $result = $mysql->query("SELECT * FROM `products`");
    // while ($row = mysqli_fetch_assoc($result)) {
        // var_dump(["id"=>$row["id"], "image"=> $row["image"], "price"=> $row["price"], "info"=> $row["info"], "quantity"=> $row["quantity"]]); 
        // echo "</br>";
    // }
    
    // die;
    // print_r($result);
    

    $array = array();
    while ($row = mysqli_fetch_assoc($result)) {
        array_push($array, ["id"=>$row["id"], "image"=> $row["image"], "price"=> $row["price"], "info"=> $row["info"], "quantity"=> $row["quantity"]]); 
    }
    $array1 = array();
    for ($i = 0; $i < ceil(mysqli_num_rows($result)/5); $i++) {
        array_push($array1, array());
        for ($j = 0; $j < 5; $j++) {
            $k = 5*$i + $j;
            array_push($array1[$i], $array[$k]);
            

            if ($k+1 == count($array)) {
                    break;
                }
        }
    }
    
    // for ($i = 0; $i < ceil(mysqli_num_rows($result)/5); $i++) {
    //     array_push($array, array());
    //     for ($j = 0; $j < 5; $j++) {
    //         $k = 5*$i + $j + 1;
    //         $image = $mysql->query("SELECT `image` FROM `products` WHERE `id` = '$k'");
    //         var_dump($image->fetch_assoc());die;
    //         print_r($image);
    //         print_r(" ");
    
    //         // image name price info quantity
            
    //         // array_push($array[$i], $j);
    //         if ($k == mysqli_num_rows($result)) {
    //         break;
    //         }
            
    //     }
    // }
    // print_r($array);
    // print_r($result);
?>
<?php 
      $a = array("Apple","Orange","Grape");
?>
<script type="text/javascript">var jArray =<?php echo json_encode($array1); ?>;</script>
<script type="text/javascript" src="main.js"></script>
