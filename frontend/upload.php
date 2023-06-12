<?php
/*get the name of the upload file*/
$filename = $_FILES['file']['name'];

/*choose where to save the uploaded file*/
$location = "upload/" . $filename;

/*save the uploaded file to the local filesystem*/
if (move_uploaded_file($_FILES['file']['tmp_name'], $location)) {
    echo $location;
} else {
    echo 0;
};
