<!-- <template>
  <div class="login">
    <h1>This is an about page</h1>
  </div>
</template> -->

<template>
<form>

  <div class="container-center h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" style="border-radius: 25px;">
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Login
                </p>

                <form class="mx-1 mx-md-4">

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                    <label class="form-label" for="form3Example3c">Email</label>
                    <div class="form-outline flex-fill mb-0">
                      <input type="email" class="form-control" />
                    </div>
                  </div>

                  <div class="d-flex flex-row align-items-center mb-4">
                    <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                    <label class="form-label" for="form3Example4c">Password</label>
                    <div class="form-outline flex-fill mb-0">
                      <input type="password" class="form-control" />
                    </div>
                  </div>


                    <div>
            <button type="button" class="btn btn-outline-success"
                    @click='register'>Register</button>
                    </div>
                    <div class="error" v-html="error"></div>

                </form>

              </div>
              <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
    data() {
        return {
            email: '',
            password: '',
            error: null
        }
    },
    methods: {
        async login () {
            try{
            await AuthenticationService.login({
                email: this.email,
            })
            }catch(e){
                this.error = e.response.data.error
            }
        }
    }
}
</script>
<style scoped>
    *{
        margin:1px;
    }
    .error{
        color: red;
    }
</style>