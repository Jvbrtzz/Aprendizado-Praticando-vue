<template>
    <header class="banner">
      <div class="overlay">
        <div class="content">
          <h1>Hello World</h1>
          <p>Esse é... o meu mundo</p>
        </div>
      </div>
    </header>
  </template>
  
  <style scoped>
  .banner {
    background-image: url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1500&q=80');
    background-size: cover;
    background-position: center;
    height: 350px;
    position: relative;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    animation: fadeIn 1.2s ease-in-out;
  }
  
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
  }
  
  .content {
    text-align: center;
    animation: slideUp 1s ease-out;
  }
  
  .content h1 {
    font-size: 3rem;
    margin: 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  }
  
  .content p {
    font-size: 1.25rem;
    margin-top: 10px;
    opacity: 0.9;
  }
  
  @keyframes fadeIn {
    from { opacity: 0 }
    to { opacity: 1 }
  }
  
  @keyframes slideUp {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
  </style>
  