document.getElementById("btn-introduction").addEventListener("click", function() {
    console.log('introduction');
    showInfoBox("box-introduction");
});

document.getElementById("btn-vietnam1945").addEventListener("click", function() {
    console.log('1945');
    showInfoBox("box-vietnam1945");
});

document.getElementById("btn-vietnam1980").addEventListener("click", function() {
    console.log('1980');
    showInfoBox("box-vietnam1980");
});

document.getElementById("btn-vietnam2000").addEventListener("click", function () {
    console.log('2000');
    showInfoBox("box-vietnam2000");
});

document.getElementById("btn-vietnam2024").addEventListener("click", function() {
    console.log('2024');
    showInfoBox("box-vietnam2024");
});

function showInfoBox(boxId) {
    var boxes = document.querySelectorAll(".info-box");
    boxes.forEach(function (box) {
        box.style.display = "none"; 
    });

    document.getElementById(boxId).style.display = "block";
}
document.getElementById('btn-introduction').addEventListener('click', function() {
    document.querySelector('.info-box').style.backgroundColor = '#f8d7a5';

}
)

document.getElementById('btn-introduction').addEventListener('click', function() {
    document.querySelector('.info-box').style.backgroundColor = '#f8d7a5';
    document.querySelector('.info-box').style.boxShadow = 'none';
}
)
function showInfoBox(boxId) {
    var boxes = document.querySelectorAll(".info-box");
    boxes.forEach(function (box) {
      box.style.display = "none";
    });
  
    document.getElementById(boxId).style.display = "flex";
  }