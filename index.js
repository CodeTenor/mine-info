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
        },
        {
          lat:  -26.392118,
          long:   27.178867,
          name: "KalDiamon",
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
      lat: -33.3332803729436,
      long: 18.53498553768094,
      name: "Western Cape",
      mines: [
        {
          lat:  -33.11339693833432,
          long:  18.83428801253194,
          name: "Western Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat:  -33.25789275794808,
          long:   18.366824198258733,
          name: "Western Diamond",
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
    nc: 
    {
      lat: -28.117768993758705,
      long: 21.209807542903743,
      name: "Northern Cape",
      mines: [
        {
          lat:  -28.041150495273296,
          long:  21.426246413472786,
          name: "Nothern Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat:  -33.25789275794808,
          long:   18.366824198258733,
          name: "Northern Diamond",
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
    ec: 
    {
      lat: -31.59652953574484,
      long: 28.68511863871671,
      name: "Eastern Cape",
      mines: [
        {
          lat: 31.503117496914097,
          long:  28.78075334499524,
          name: "Eastern Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat:  -31.66845097209575,
          long:   8.75823505902877,
          name: "Eastern Diamond",
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
    fs: 
    {
      lat: -29.10932923485913,
      long: 26.052807480140853,
      name: "Free State",
      mines: [
        {
          lat: -28.93935408904752,
          long:  26.240614452711178,
          name: "Eastern Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat: -29.265466112169516,
          long: 26.08923006886931,
          name: "Eastern Diamond",
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
    mp: 
    {
      lat: -26.507029068992978,
      long: 30.0245488531614,
      name: "Mpumalanga",
      mines: [
        {
          lat: -26.654271358399146,
          long:  30.032142365250984,
          name: "MP Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat: -26.350720336362965,
          long: 29.734559997624665,
          name: "MP Diamond",
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
    kzn: 
    {
      lat: -29.665465356976107, 
      long: 30.62494767292539,
      name: "Kwazulu Natal",
      mines: [
        {
          lat: -29.681997475302424, 
          long:  30.971302505670685,
          name: "KZN Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat: -29.780095022153166, 
          long: 30.679292889755448,
          name: "KZN Diamond",
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
    gp: 
    {
      lat: -25.54856918018281, 
      long: 28.733019110306596,
      name: "Gauteng",
      mines: [
        {
          lat: -25.52242831171553, 
          long:  28.31716868009624 ,
          name: "GP Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat: -25.800308377888292, 
          long: 29.02327891222818,
          name: "GP Diamond",
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
    lmp: 
    {
      lat: -23.225236149780486,
      long: 29.35047976185031,
      name: "Limpopo",
      mines: [
        {
          lat: -23.765291501601475,
          long: 29.16059569845293,
          name: "LMP Gold",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        },
        {
          lat: -24.385903180377156,
          long: 29.691673664079303,
          name: "LMP Diamond",
          description: "TEST Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus illum in eveniet tempore distinctio reiciendis pariatur? Sint sequi a deserunt cum? Aliquam nam ipsum aspernatur nihil, incidunt quidem accusantium commodi.",
          gallery: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ1lWaWYntxx96w8Aa_Vn5rk7mdg-Mbzls4DqUmnWvIiwukfOGDuTyr0Pjll-QnC5wNo0&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCdq8Pf2yG40L6vvH7xZpKqsvJVm01wTTJ1191NiNHxK-mb57fX_0mP5dwPQ5ooAqYrBE&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL852sF02hDt7n0x3n9BESkTBq44PJhickTndQPmJD75EmsD8rZuCavufNBAQ4m83utC4&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Jzd14l5SePYDVFa7_LTXTitOuJHQ1nXVlQEUtSnHScQAWSwShJxwkcMZT1aYuuN_Xf0&usqp=CAU"
          ]
        }
      ]
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
  document.getElementById("mine-detail").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("mine-detail").style.display = "none";
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
          title: mine.name,
        });

        marker.addListener("click", () => {
          //navigate to section
          document.getElementById("mine-detail").style.display = "block";
          document.getElementById("mine-name").innerHTML = mine.name;
          document.getElementById("mine-description").innerHTML = mine.description;
        });
      });

      window.initMap = initMap;
  }
}