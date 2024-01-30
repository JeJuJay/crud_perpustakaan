@extends('layouts.app')




    @section('contents')
    <h1 class="h3 mb-2 text-gray-800">Tables</h1>
    <p class="mb-4">DataTables is a third party plugin that is used to generate the demo table below.
        For more information about DataTables, please visit the <a target="_blank"
            href="https://datatables.net">official DataTables documentation</a>.</p>

    <div class="card shadow mb-4">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Judul</th>
                            <th>Penulis</th>
                            <th>Penerbit</th>
                            <th>Tahun Terbit</th>
                            <th>aksi</th>
                        </tr>
                    </thead>
                    @foreach ($buku as $d)
                    <tbody>
                        <tr>
                            <td>{{$d->BukuID}}</td>
                            <td>{{$d->Judul}}</td>
                            <td>{{$d->Penulis}}</td>
                            <td>{{$d->Penerbit}}</td>
                            <td>{{$d->TahunTerbit}}</td>
                            <td>
                                <a class="btn btn-primary"href="#" role="button">Edit</a>
                                <a class="btn btn-danger "href="#" role="button">Delete</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

</div>
</div>
@endforeach
@endsection

    
