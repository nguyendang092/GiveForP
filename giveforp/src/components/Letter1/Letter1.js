import React, { useEffect } from 'react';
import gsap from 'gsap';
import './index.css'; 

function LoveLetter() {
  useEffect(() => {
    // Các media queries
    const mobile_media_query = window.matchMedia("(max-width: 400px)");
    const tablet_media_query = window.matchMedia(
      "(min-width: 400px) and (max-width: 600px)"
    );
    const notes = document.querySelectorAll(".js-note");

    // Function that resets the size of the notes.
    function recize_notes() {
      for (let i = 0; i < notes.length; i++) {
        if (notes[i].classList.contains("active")) {
          notes[i].classList.remove("active");
          gsap.set(notes[i], {
            height: "30%",
            clearProps: "all"
          });
        }
      }
    }

    // Main function that enables all the notes.
    function notes_ready() {
      gsap.to(".js-envelop-content", {
        height: "110%",
        duration: 0.5
      });

      for (let i = 0; i < notes.length; i++) {
        notes[i].addEventListener("click", function () {
          if (mobile_media_query.matches) {
            if (this.classList.contains("active")) {
              this.classList.remove("active");
              gsap.set(this, {
                height: "30%",
                clearProps: "all"
              });
            } else {
              for (let i = 0; i < notes.length; i++) {
                if (notes[i].classList.contains("active")) {
                  notes[i].classList.remove("active");
                  gsap.set(notes[i], {
                    height: "30%",
                    clearProps: "all"
                  });
                }
              }
              this.classList.add("active");
              gsap.set(this, {
                height: 125 + 40 * i + "%"
              });
            }
          } else if (tablet_media_query.matches) {
            if (this.classList.contains("active")) {
              this.classList.remove("active");
              gsap.set(this, {
                height: "30%",
                clearProps: "all"
              });
            } else {
              for (let i = 0; i < notes.length; i++) {
                if (notes[i].classList.contains("active")) {
                  notes[i].classList.remove("active");
                  gsap.set(notes[i], {
                    height: "30%",
                    clearProps: "all"
                  });
                }
              }
              this.classList.add("active");
              gsap.set(this, {
                height: 80 + 21 * i + "%"
              });
            }
          } else {
            if (this.classList.contains("active")) {
              this.classList.remove("active");
              gsap.set(this, {
                height: "30%",
                clearProps: "all"
              });
            } else {
              for (let i = 0; i < notes.length; i++) {
                if (notes[i].classList.contains("active")) {
                  notes[i].classList.remove("active");
                  gsap.set(notes[i], {
                    height: "30%",
                    clearProps: "all"
                  });
                }
              }
              this.classList.add("active");
              gsap.set(this, {
                height: 70 + 20 * i + "%"
              });
            }
          }
        });
      }
    }

    // Function that set up the up paper of the envelope.
    function set_up_paper() {
      var arr = [0, 0, 100, 0, 50, 61];
      gsap.set(".js-up-paper", {
        bottom: "97%",
        rotation: 180,
        zIndex: 200,
        clipPath:
          "polygon(" +
          arr[0] +
          "%" +
          arr[1] +
          "%," +
          arr[2] +
          "%" +
          arr[3] +
          "%," +
          arr[4] +
          "%" +
          arr[5] +
          "%)",
        onComplete: notes_ready
      });
    }

    // Function that starts the up paper transition.
    function envelop_transition() {
      gsap.to(".js-up-paper", {
        bottom: "1%",
        duration: 0.25,
        onComplete: set_up_paper
      });
      document
        .querySelector(".js-up-paper")
        .removeEventListener("click", envelop_transition);
      document.querySelector(".js-up-paper").classList.remove("cursor");
    }

    // Function that allows cut the sticker.
    function sticker() {
      gsap.set(".js-sticker", { width: "20%", left: "-80%" });
      document.body.classList.remove("scissors");
      document.querySelector(".js-sticker").removeEventListener("click", sticker);
      document
        .querySelector(".js-up-paper")
        .addEventListener("click", envelop_transition);
      document.querySelector(".js-up-paper").classList.add("cursor");
    }

    document.querySelector(".js-sticker").addEventListener("click", sticker);

    window.onresize = function (event) {
      recize_notes();
    };

    // Tạo sự kiện phát âm thanh tự động khi tải trang
    const audio = new Audio('./audio/videoplayback.mp3');
    audio.play();

  }, []); // useEffect chỉ chạy 1 lần khi component được load

  return (
    <div className="scissors">
      <div className="envelop">
        <div className="envelop__front-paper"></div>
        <div className="envelop__back-paper"></div>
        <div className="envelop__up-paper js-up-paper"></div>
        <div className="envelop__sticker js-sticker"></div>
        <div className="envelop__false-sticker"></div>
        <div className="envelop__content js-envelop-content">
          <div className="love-notes">
            <div className="note js-note">
              <div className="note__text">
                <p>
                  Dear Phương! Đây là lần thứ nhất nắm tay có thể là lần nắm tay lúc tuổi trẻ, tất cả những gì thơ mộng nhất, lung linh nhất, đáng yêu nhất đều ở thời gian này. N xin lỗi vì đã nhút nhát, không mạnh dạn để theo đuổi người con gái này, ở mỗi thời điểm N đều có cơ hội nhưng lại không thể tận dung để rồi cuối cùng lạc mất P. Đó là N của quá khứ, còn bây giờ N của hiện tại sẽ dũng cảm hơn nhiều, cũng như tận dụng những cơ hội hiếm hoi mà bản thân có được để dành cho P.
                </p>
              </div>
            </div>
            <div className="note js-note">
              <div className="note__text">
                <p>quero que eles nunca acabem e que tenham sempre muitos outros pela frente.</p>
              </div>
            </div>
            <div className="note js-note">
              <div className="note__text">
                <p>você é a melhor coisa que me aconteceu, obrigado por me escolher todos os dias.</p>
                <p>I Love You &hearts;.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoveLetter;
