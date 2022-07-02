<script>
export default {
    name: 'PageGrid',
    headerName: 'Grid'
}
</script>

<template>
    <div class="container">
        <div class="row m-2">
            <div class="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-warning">
                <p>Column 1</p>
            </div>

            <div class="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-info">
                <p>Column 2</p>
            </div>

            <div class="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-warning">
                <p>Column 3</p>
            </div>

            <div class="col-12 col-sm-9 col-md-6 col-lg-3 col-xl-3 bg-info">
                <p>Column 4</p>
            </div>
        </div>
    </div>
</template>