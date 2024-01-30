<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Login</title>

    <!-- Custom fonts for this template-->
    <link href="{{ asset('assets/vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">

    <!-- Custom styles for this template-->
    <link href="{{ asset('assets/css/sb-admin-2.min.css') }}" rel="stylesheet">

</head>



    <body class="bg-gradient-primary">

        <div class="container">
    
            <!-- Outer Row -->
            <div class="card-body">
                                                                     
    
                    <div class="card o-hidden border-0 shadow-lg my-5">
                        
                            <!-- Nested Row within Card Body -->
                                    <div class="p-5">
                                        <div class="text-center">
                                            <h1 class="h4 text-gray-900 mb-4">Welcome Back! To library Digital</h1>
                                        </div>
                                        <form class="user" action="{{ route('login.action') }}" method="post" class="user">
                                            @csrf
                                             
                                <div class="form-group">
                                    <input name="Email" type="text" class="form-control form-control-user 
                                   @error('Email') is-invalid
                                   @enderror" id="exampleEmail"
                                        placeholder="Surename">
                                        @error('Email')
                                            <span class="invalid-feedback">{{ $message }}</span>
                                        @enderror
                                </div>
                                <div class="form-group">
                                    <input name="Password" type="password" class="form-control form-control-user @error('Password')
                                    is_invalid @enderror"
                                        id="exampleInputPassword" placeholder="Password">
                                        @error('Password')
                                        <span class="invalid-feedback">{{ $message }}</span>
                                    @enderror
                                            </div>  
                                                <button type="submit" class="btn btn-primary btn-user btn-block">
                                                    Login
                                                </button>
                                            </form>
                                            <hr>
                                            <div class="text-center">
                                                <a class="small" href="{{ route('register') }}">Create an Account!</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        
    
            </div>
    
        </div>
    
    
    </body>

    <!-- Bootstrap core JavaScript-->
    <script src="{{ asset('assets/vendor/jquery/jquery.min.js')}}"></script>
    <script src="{{ asset('assets/vendor/bootstrap/js/bootstrap.bundle.mi.js') }}"></script>

    <!-- Core plugin JavaScript-->
    <script src="{{ asset('assets/vendor/jquery-easing/jquery.easing.min.js') }}"></script>

    <!-- Custom scripts for all pages-->
    <script src="{{ asset('assets/js/sb-admin-2.min.js') }}"></script>
</body>

</html>