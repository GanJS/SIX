
//nav��Ŀ��ά��
$(function () {
    $(".lesson").mouseenter(function () {
        $(".link1").show();
    });
    $(".lesson").mouseleave(function () {
        $(".link1").hide();
    });
    $(".link1").mouseenter(function () {
        $(this).show();
    });
    $(".link1").mouseleave(function () {
        $(this).hide();
    });

    $(".app").mouseenter(function () {
        $(".link2").show();
    });
    $(".app").mouseleave(function () {
        $(".link2").hide();
    });
    $(".link2").mouseenter(function () {
        $(this).show();
    });
    $(".link2").mouseleave(function () {
        $(this).hide();
    });

    //box
        $(".main-w .box1").mouseenter(function () {
            $(".big-box-one").show(300);
        });
        $(".main-w .box1").mouseleave(function () {
            $(".big-box-one").hide();
        });

        $(".main-w .box2").mouseenter(function () {
            $(".big-box-two").show(200);
        });
        $(".main-w .box2").mouseleave(function () {
            $(".big-box-two").hide();
        });

        $(".main-w .box3").mouseenter(function () {
            $(".big-box-three").show(400);
            //$(".big-box-three").fadeOut(100);
            //$(".big-box-three").fadeIn(100);
            //$(".big-box-three").hide();
        });
        $(".main-w .box3").mouseleave(function () {
            $(".big-box-three").hide();

        });

        $(".main-w .box4").mouseenter(function () {
            $(".big-box-four").show(200);

        });
        $(".main-w .box4").mouseleave(function () {
            $(".big-box-four").hide();
        });

        $(".main-w .box5").mouseenter(function () {
            $(".big-box-five").show(300);
        });
        $(".main-w .box5").mouseleave(function () {
            $(".big-box-five").hide();
        });

        $(".main-w .box6").mouseenter(function () {
            $(".big-box-six").show(100);
            //$(".big-box-six").slideUp(300);
            //$(".big-box-six").slideDown(300);
        });
        $(".main-w .box6").mouseleave(function () {
            $(".big-box-six").hide();
        });

        $(".main-w .box7").mouseenter(function () {
            $(".big-box-seven").show(300);
        });
        $(".main-w .box7").mouseleave(function () {
            $(".big-box-seven").hide();
        });

    $(".big-box-one").mouseenter(function () {
        $(this).show();
    });
    $(".big-box-one").mouseleave(function () {
        $(this).hide();
    });
    $(".big-box-two").mouseenter(function () {
        $(this).show();
    });
    $(".big-box-two").mouseleave(function () {
        $(this).hide();
    });
    $(".big-box-three").mouseenter(function () {
        $(this).show();
    });
    $(".big-box-three").mouseleave(function () {
        $(this).hide();
    });
    $(".big-box-four").mouseenter(function () {
        $(this).show();
    });
    $(".big-box-four").mouseleave(function () {
        $(this).hide();
    });
    $(".big-box-five").mouseenter(function () {
        $(this).show();
    });
    $(".big-box-five").mouseleave(function () {
        $(this).hide();
    });
    $(".big-box-six").mouseenter(function () {
        $(this).show();
    });
    $(".big-box-six").mouseleave(function () {
        $(this).hide();
    });
    $(".big-box-seven").mouseenter(function () {
        $(this).show();
    });
    $(".big-box-seven").mouseleave(function () {
        $(this).hide();
    });



//С���
    var timer = null,target = 0,leader = 0;
    var botArrow=document.getElementsByClassName("foot-bot")[0];
    var img=botArrow.children[2];

    //window.onscroll = function () {
    //    //�жϣ��������ȥ��ͷ������200px����ô��ʾС������������ء�
    //    if(scroll().top >= 100){
    //        img.style.display = "block";
    //    }else{
    //        img.style.display = "none";
    //    }
    //    //����Ļ������ʱ��Ϊleader��ֵ(����һ������������¼����ȥ��ͷ���������ֵ�ոպõ���Y���꣡)
    //    leader = scroll().top;
    //}

    //2.��ͼƬ����¼�
    //1.��ǰ�����ƶ����Ǻ��ӡ���������ǰ�Ļ���������װ�������ˣ�
    //2.Ҫ��ϻ�����˾��ҳ����ת��д������ҳ�����ת��
    img.onclick = function () {
        //���ö�ʱ����������ƺ��ӻ�����Ч����������Ļ��ת��
        clearInterval(timer);
        timer = setInterval(function () {
            var step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(leader === 0){
                clearInterval(timer);
            };
        },300);
    };

    function scroll() {
        return {
            "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
            "left": document.documentElement.scrollLeft + document.body.scrollLeft
        };
    }

});