ClassicEditor
    .create( document.querySelector( '#editor' ), {
        toolbar: {
                items: [
                        'undo', 'redo',
                        '|', 'heading',
                        '|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
                        '|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'code',
                        '|', 'link', 'uploadImage', 'blockQuote', 'codeBlock',
                        '|', 'alignment',
                        '|', 'bulletedList', 'numberedList', 'todoList', 'outdent', 'indent'
                ],
                shouldNotGroupWhenFull: true
            }
            
            
    } )
    .catch( error => {
        console.log( error );
    } );
