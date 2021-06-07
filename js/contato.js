$("#submit") .click(function() {
    var name = $("#name") .val ();
    var email = $("#email") .val ();
    var phone = $("#phone") .val ();
    var message = $("#message") .val ();
    
    


    if(name == '') {                               

        swal({
            title: "Preencha seu nome!",
            icon: "warning",
            button: "ok",
          });
          formuser.name.focus();
          return false

        }
        if(message == 'text' || phone == 'text' || email == 'text' || name == '') {                               

          swal({
              title: "Preencha seu nome!",
              icon: "warning",
              button: "ok",
            });
            formuser.name.focus();
            return false
  
          }
        if(email == '') {                               

            swal({
                title: "Preencha seu E-mail!",
                icon: "warning",
                button: "ok",
              });
              formuser.email.focus();
              return false
    
            }
            if(message == 'text' || phone == 'number' || email == '' || name == 'text') {                               

              swal({
                  title: "Preencha seu E-mail!",
                  icon: "warning",
                  button: "ok",
                });
                formuser.email.focus();
                return false
      
              }
             
            if(phone == '') {                               

                swal({
                    title: "Preencha seu Telefone!",
                    icon: "warning",
                    button: "ok",
                  });
                  formuser.phone.focus();
                  return false
        
                }
                if(message == 'text' || phone == '' || email == 'text' || name == 'text') {                               

                  swal({
                      title: "Preencha seu Telefone!",
                      icon: "warning",
                      button: "ok",
                    });
                    formuser.phone.focus();
                    return false
          
                  }
    
                if(message == '') {                               

                    swal({
                        title: "Preencha sua mensagem!",
                        icon: "warning",
                        button: "ok",
                      });
                      formuser.message.focus();
                      return false
            
                    }
                    if(message == '' || phone == 'number' || email == 'text' || name == 'text') {                               

                      swal({
                          title: "Preencha sua mensagem!",
                          icon: "warning",
                          button: "ok",
                        
                        });
                        formuser.message.focus();
                        return false
              
                      }
        else{
            swal({
                title: "Mensagem enviada com sucesso!",              
                icon: "success",
                button: "Sair",
              });
        }
    });
    function onlynumber(evt) {
      var theEvent = evt || window.event;
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode( key );
      //var regex = /^[0-9.,]+$/;
      var regex = /^[0-9.]+$/;
      if( !regex.test(key) ) {
         theEvent.returnValue = false;
         if(theEvent.preventDefault) theEvent.preventDefault();
      }
   }