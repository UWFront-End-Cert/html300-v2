<template>
  <div class="container py-4">
    <!-- Navigation Bar with Light Blue Pills -->
    <header class="pb-3 mb-4 border-bottom">
      <nav class="nav nav-pills">
        <a class="nav-link text-info" aria-current="page" href="index.html"
          >Home</a
        >
        <a class="nav-link active text-white bg-info" href="hot.html"
          >Hot Memes</a
        >
        <a class="nav-link text-info" href="about.html">About</a>
        <a class="nav-link text-info" href="archive.html">Archive</a>
      </nav>
    </header>

    <h1>Hottest Memes of the Week</h1>

    <h3>Highlights</h3>

    <!-- Carousel that Cycles through 3 Hot Memes -->
    <div
      id="carouselExampleSlidesOnly"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="3000">
          <img
            src="images/ceo.jpg"
            class="d-block w-50 mx-auto"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            title="Tooltip on top"
          />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="images/molina.PNG" class="d-block w-50 mx-auto" />
        </div>
        <div class="carousel-item" data-bs-interval="3000">
          <img src="images/spider.JPG" class="d-block w-50 mx-auto" />
        </div>
      </div>
    </div>

    <h3>Other Hot Memes</h3>
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col">
        <div class="card shadow-sm">
          <img src="images/ceo.jpg" class="d-block w-50 img-fluid mx-auto" />

          <div class="card-body">
            <p class="card-text">
              This is a place holder meme taken from (Source)
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="images/ceo.jpg"
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="images/molina.PNG" class="d-block w-50 img-fluid mx-auto" />

          <div class="card-body">
            <p class="card-text">
              This is a place holder meme taken from (Source)
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="images/molina.PNG"
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card shadow-sm">
          <img src="images/spider.JPG" class="d-block w-50 img-fluid mx-auto" />

          <div class="card-body">
            <p class="card-text">
              This is a place holder meme taken from (Source)
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="images/spider.JPG"
                  ><button
                    type="button"
                    class="btn btn-sm btn-outline-secondary"
                  >
                    View
                  </button></a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
