// Get the modal
var modal = document.getElementById("myModal");

var apiKey = "AIzaSyDTt2trMUQAMQ3Xw5qUjmo6MjiPRA3P7rc";

// Get the button that opens the modal
var btns = document.querySelectorAll("button[type=button]");  

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var provinceData =
  {
    nw: 
    {
      lat:  -26.122900238077364,
      long:  25.674247627213393,
      name: "North West",
      mines: [
        {
          lat:  -26.122900238077364,
          long:  25.674247627213393,
          name: "KalGold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        }
      ]
    },
    wc: 
    {
      lat:"something",
      long:"something",
      name: "Western Cape",
      mines: []
    },
    nc: 
    {
      lat:"something",
      long:"something",
      name: "Northern Cape",
      mines: []
    },
    ec: 
    {
      lat:"something",
      long:"something",
      name: "Eastern Cape",
      mines: []
    },
    fs: 
    {
      lat:"something",
      long:"something",
      name: "Free State",
      mines: []
    },
    mp: 
    {
      lat:"something",
      long:"something",
      name: "Mpumalanga",
      mines: []
    },
    kzn: 
    {
      lat:"something",
      long:"something",
      name: "Kwazulu Natal",
      mines: []
    },
    gp: 
    {
      lat:"something",
      long:"something",
      name: "Gauteng",
      mines: []
    },
    lmp: 
    {
      lat:"something",
      long:"something",
      name: "Limpopo",
      mines: []
    }
  }

// When the user clicks on the button, open the modal
btns.forEach(btn => {
    btn.onclick = function() {
        var id = btn.id;
        modal.style.display = "block";
        var modalTitle = document.getElementById("modal-title");
        modalTitle.innerText = provinceData[id].name;
        initMap(id);
      }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// google maps implementation
var map;

function initMap(id) {
  if(id != undefined) {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: provinceData[id].lat, lng: provinceData[id].long},
        zoom: 8
      });

      provinceData[id].mines.forEach(mine => {
        var marker = new google.maps.Marker({
          position: { lat: mine.lat, lng: mine.long},
          map,
          title: provinceData[id].name,
        });

        document.getElementById("mine-name").innerHTML = mine.name;
        document.getElementById("mine-description").innerHTML = mine.description;

        marker.addListener("click", () => {
          //navigate to section
          document.getElementById("mine-detail").style.display = "block";
        });
      });

      window.initMap = initMap;
  }
}