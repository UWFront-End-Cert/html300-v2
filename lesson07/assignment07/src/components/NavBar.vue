<template>
  <div> 
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/fluid" class="nav-link active" aria-current="page">Fluid Images</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/grid" class="nav-link active" aria-current="page">Grid Bootstrap</router-link>
            </li>

            <li class="nav-item">
              <router-link to="/accordian" class="nav-link active" aria-current="page">Must Watch</router-link>
            </li>

          </ul>
          <!-- The above two nav items are duplicates of what should be expected in the dropdown below.-->
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>

          <ul class="dropdown-menu">

            <li><router-link to="/grid" class="dropdown-item">Grid Boostrap</router-link></li>
            <li><router-link to="/accordian" class="dropdown-item">Must Watch</router-link></li>
          
          </ul>
        </li>

        </div>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
    
  }
  

</script>

