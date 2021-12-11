const baseURI = 'https://koodintarkistus.hopto.org:3333';

const showResult = (data) => {
	if (data.stdout != "") {
        const partsOut = data.stdout.split("\n");
        $('#result_container').empty().append('<h2>Results: </h2>');
        let startPrint = false;
        partsOut.forEach(element => {
            console.log(element);
            if (element.includes("[==========]")) startPrint = true;
            if (startPrint) $('#result_container').append(`<p>${element}</p>`);
        });
        
	}
	if (data.stderr != "") {
        const partsErr = data.stderr.split("\n");
		$('#result_container').append('<h2>Errors/Warnings: </h2>');
        partsErr.forEach(element => {
            $('#result_container').append(`<p>${data.stderr}</p>`);
        });
        
        
	}
}
$('#upload_form').on('submit', (e) => {
    e.preventDefault();
    $('#testing_info').empty().append("<h2>Testing...</2>");
    console.log('uploading a file');
    const file = document.getElementById('file_upload');
    let formData = new FormData();
    formData.append('file_upload', file.files[0]);
    console.log(file.files[0]);
    $.ajax({
        url: `${baseURI}/api/file/upload`,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function(data){
            $('#testing_info').empty();
            console.log(data);
            showResult(data);
        }
    });
});
$('#upload_form2').on('submit', (e) => {
    e.preventDefault();
    $('#testing_info').empty().append("<h2>Testing...</2>");
    console.log('uploading a file');
    const file = document.getElementById('file_upload2');
    let formData = new FormData();
    formData.append('file_upload', file.files[0]);
    console.log(file.files[0]);
    $.ajax({
        url: `${baseURI}/api/file/upload`,
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function(data){
            $('#testing_info').empty();
            console.log(data);
            showResult(data);
        }
    });
});
