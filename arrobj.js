var man = [
    {
    id:1,
    name:"Quần âu đen",
    code:"TC143NA",
    price:"250.000",
    image:"https://th.bing.com/th/id/OIP.8KrkwfiqqP94cSZM76NcpgHaIp?rs=1&pid=ImgDetMain"
    },
    {
    id:2,
    name:"Áo sơ mi nam",
    code:"TC1342NA",
    price:"380.000",
    image:"https://vestondep.vn/upload/product/mau-ao-so-mi-nam-mau-xam-tro-co-rong-tai-TPHCM-Mon-Amie-2641.jpg"
    },
    {
    id:3,
    name:"Quần short",
    code:"TC323",
    price:"270.000",
    image:"https://th.bing.com/th/id/R.d84f16d6ec25f575396ee233490b927a?rik=vjzHnPjVwuTfRw&pid=ImgRaw&r=0"
    },
    {
    id:4,
    name:"Áo polo có cổ",
    code:"TC223",
    price:"300.000",
    image:"https://th.bing.com/th/id/OIP.rDEnqhsRoK57z8ffGk1A-AHaHa?rs=1&pid=ImgDetMain"
    }

]
var woment = [
    {
    id:1,
    name:"Váy công sở nữ",
    code:"TC143",
    price:"250.000",
    image:"https://th.bing.com/th/id/OIP.__bo4BCY_pnpOW7Zj_JR5AHaKX?rs=1&pid=ImgDetMain"
    },
    {
    id:2,
    name:"Áo sơ mi nữ",
    code:"TC123",
    price:"200.000",
    image:"https://th.bing.com/th/id/OIP.wpUkVw0ZX5K5V6NVawTyCAHaLH?rs=1&pid=ImgDetMain"
    },
    {
    id:3,
    name:"Quần ống suông nữ",
    code:"TC323",
    price:"270.000",
    image:"https://cf.shopee.vn/file/5edcb42f96626d4b14b40169438eeb27"
    },
    {
    id:4,
    name:"Áo khoác dài nữ",
    code:"TC223",
    price:"300.000",
    image:"https://danviet.mediacdn.vn/upload/4-2019/images/2019-10-09/ao-khoac-dang-dai-vu-khi-sang-trong-cua-nu-cong-so-0-1570589189-width500height755.jpg"
    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;
    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+woment[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+woment[i].name + '</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML+= demo;
    }
}