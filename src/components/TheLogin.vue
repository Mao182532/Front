<template>
    <div>
        <div class="container">
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                <input v-model="login.email" type="email" class="form-control" id="exampleFormControlInput1">
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2-form-label" >Password</label>
                <div class="col-sm-10">
                   <input v-model="login.password" type="password" class="form-control" id="inputPassword">
                </div>
            </div>  

            <button v-on:click="iniciarSesion" type="button" class="btn btn-dark">INICIAR SESION</button>

            <pre>

               {{ $data }}

            </pre>
        <div>    
    </div>
</template>


<script>
import swal from 'sweetalert';
export default {
    Name: "Login",
    data(){
        return {
            login: {
              email: '',
              password: '',
            }
        }  
    },
    methods:{
        async iniciarSesion(){
            // Funcion de iniciar sesion
            try {
                let response = await this.$http.post('/api/user/login');
                let token = response.data.tokenReturn;
                let usuario = reponse.data.user;
                if (token){
                    localStorage.setItem('token', token);
                    localStorage.setItem('usuario', JSON.stringify(usuario) );
                    swal("Exito!", "ha iniciado sesion correctamente!", "succes");
                    this.$router.push('/home');
                }
            } catch (error){
                swal("Ooops!", "Something went wrong!", "error");
            }
        }
    }
    
}
</script>
// hola