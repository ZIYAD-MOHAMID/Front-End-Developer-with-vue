<template>
  <div class="articles" id="articles">
    <div class="dots dots-up"></div>
    <div class="dots dots-down"></div>
    <h2 class="main-title">Articles</h2>
    <div class="container">
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-1.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-2.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-3.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-4.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-5.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-6.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-7.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
      <div class="box">
        <img src="../assedes/images/portfolio/portfolio-8.jpg" alt="" />
        <div class="content">
          <h3>Test Title</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis libero</p>
        </div>
        <div class="info">
          <a href="#">Read More</a>
          <i class="fas fa-long-arrow-alt-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.articles {
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  background-color: white;
  .container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 40px;
    .box {
      box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
      background-color: white;
      border-radius: 6px;
      overflow: hidden;
      transition: transform 0.3s, box-shadow 0.3s nsition;
      &:hover {
        box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
        transform: translateY(-10px);
        transition: 0.3s;
      }
      img {
        width: 100%;
        height: 187px;
      }
      .content {
        padding: 20px;
        h3 {
          margin: 0;
        }
        p {
          margin: 10px 0 0;
          line-height: 1.5;
          color: #777;
        }
      }
      .info {
        padding: 20px;
        border-top: 1px solid #e6e6e7;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        i {
          color: #e9c45a;
        }
        &:hover i {
          animation: moveing-arrow 0.6s linear infinite;
        }
      }
    }
  }
}
</style>
