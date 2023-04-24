<template>
    <footer class="footer mt-auto py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <address>
              Abc123 st.<br>
              Anytown, Åland, Finland 12345<br>
              Phone: (123) 456-7890<br>
              Email: annsofi-store@aland.com
            </address>
          </div>
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <ul class="list-unstyled">
              <li><a href="#"><i class="bi bi-facebook"></i></a></li>
              <li><a href="#"><i class="bi bi-twitter"></i></a></li>
              <li><a href="#"><i class="bi bi-instagram"></i></a></li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Site Map</h5>
            <ul class="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#store">Store</a></li>
              <li><a href="#about">About Us</a></li>
             
            </ul>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-12">
            <p class="text-center">&copy; 2023 Your Company Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </template>

  <script setup></script>
  
  <style>
  .footer {
    background-color: #f5f5f5;
  }
  
  @media (min-width: 768px) {
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 200px; /* Set the height of your footer here */
    }
  }
  </style>