<?php

$arr = [0, 1, 2, 3, 4, 5, 6];

//echo $arr[3];

$assocArr = [
  'name'    => 'Hilmi',
  'age'     => 21,
  'address' => 'Cyber'
];

foreach ($assocArr as $key => $val) {
    echo $key;
    echo $val;
}
