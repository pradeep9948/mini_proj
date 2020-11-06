$(document).ready(() => {
  $("#search-button").click(function () {
    var data = $("#input-search").val();
    $("#main").html("");

    $.ajax({
      url: "http://localhost:3000/blogs",
      method: "GET",
      success: (x) => {
        for (var i = 0; i < x.length; i++) {
          if (
            data === x[i].category ||
            data === x[i].title ||
            data === x[i].author
          ) {
            //append to div
            $("#main").append(
              '<div class="blog-div">' +
                "<span>" +
                x[i].title +
                "</span> <br>" +
                "<span>" +
                x[i].author +
                "</span><br>" +
                "<p>" +
                x[i].content +
                "</p><br>" +
                '<button class="btn-primary" id="' +
                x[i].title +
                '">readmore</button>' +
                "</div>"
            );
          }
        }
      },
      error: (e) => {
        console.log("not available");
      },
    });
  });

  $(".link-search").click(function () {
    console.log("clicked on link");
    var element = $(this).html();
    $("#main").load("blank.html");
    console.log("clicked on link" + element);
    $.ajax({
      url: "http://localhost:3000/blogs",
      method: "GET",
      success: (x) => {
        console.log("suc");

        for (var j = 0; j < x.length; j++) {
          console.log("for");

          if (x[j].category == element) {
            console.log("if");

            //append to div
            $("#main").append(
              '<div class="blog-div">' +
                "<span>" +
                x[j].title +
                "</span> <br>" +
                "<span>" +
                x[j].author +
                "</span><br>" +
                "<p>" +
                x[j].content +
                "</p><br>" +
                '<button class="btn-primary" id="' +
                x[j].title +
                '">readmore</button>' +
                "</div>"
            );
          }
        }
      },
      error: (e) => {
        console.log("not available");
      },
    });
  });


// const getPost = () => {
//     console.log("clicked on link");
//     var element = $(this).html();
//     $("#main").load("blank.html");
//     console.log("clicked on link" + element);
//     $.ajax({
//       url: "http://localhost:3000/blogs",
//       method: "GET",
//       success: (x) => {
      
//         console.log("suc");

//         for (var j = 0; j < x.length; j++) {
//           console.log("for");

//           if (x[j].category == element) {
//             console.log("if");

//             //append to div
//             $("#main").append(
//               '<div class="blog-div">' +
//                 "<span>" +
//                 x[j].title +
//                 "</span> <br>" +
//                 "<span>" +
//                 x[j].author +
//                 "</span><br>" +
//                 "<p>" +
//                 x[j].content +
//                 "</p><br>" +
//                 '<button class="btn-primary" id="' +
//                 x[j].title +
//                 '">readmore</button>' +
//                 "</div>"
//             );
//           }
//         }

//         }})    };
      });