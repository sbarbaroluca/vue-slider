var app = new Vue(
  {
    el: "#root",
    data: {
        images: [
          "https://images.unsplash.com/photo-1620153874520-aabdacf78006?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80",
          "https://images.unsplash.com/photo-1618020503938-33e1376d7441?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          "https://images.unsplash.com/photo-1619312430889-af2151c120ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          "https://images.unsplash.com/photo-1489493585363-d69421e0edd3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
          "https://images.unsplash.com/photo-1611730927874-19a6f569df2a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"
        ],
        imageIndex: 0,
    },
    mathods: {
        nextImage: function() {
          this.imageIndex++;
          if(this.imageIndex == this.images.length) {
            this.imageIndex = 0;
          }

        },
        prevImage: function() {
          this.imageIndex--;
          if(this.imageIndex <= 0) {
            this.imageIndex = this.images.length -1;
          }
        }
    }
  }
);