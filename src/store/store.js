import Vue from 'vue'
import Vuex from 'Vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	state:{
    songlist:[
      {
        songname:'寄明月',
        songername:'SING女团',
        songcover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000000yACPu0nXVYL.jpg?max_age=2592000",
        songurl:"http://111.13.137.27/amobile.music.tc.qq.com/C400002yP4Gd0Mjr30.m4a?guid=9247888695&vkey=84E47891E7AC8268781344BDFED71522A5AF2EB5DF9BE7A0FE357DA2DA1B5167109743657DF1F20574CEA3743A49678B2DCAE506D12822A0&uin=3442&fromtag=66",
        lyric:"W3RpOuWvhOaYjuaciF0KW2FyOlNJTkflpbPlm6JdClthbDrlr4TmmI7mnIhdCltieTpdCltvZmZzZXQ6MF0KWzAwOjAwLjAwXeWvhOaYjuaciCAtIFNJTkflpbPlm6IKWzAwOjA4LjA4Xeivje+8muadjuaHi+aJrApbMDA6MTYuMTdd5puy77ya5p2O5oeL5omsClswMDoyNC4yNV3nvJbmm7LvvJrnuqrnsrnluIzvvIhHLVRyYWN577yJClswMDozMi4zNF3nqb/ov4fkuoblsI/lt7flkI7nmoTlj6TooZcKWzAwOjM1Ljg5XemdkuWimeaXgeS9oOmBpeacm+WklemYs+aWnApbMDA6MzkuMDNd5Y+q5Zug5piv5LiN57uP5oSP55qE5LiA556lClswMDo0Mi43OV3mibDkubHmiJHmgJ3nu6rkuI3oiI3mmLzlpJwKWzAwOjQ2LjA3XeaDs+WMluS9nOW6hOWRqOWPmOaIkOidtOidtgpbMDA6NDkuNTdd6am+6Z2S5LqR56m/6L+H57mB5p6d6IyC5Y+2ClswMDo1Mi43NF3nurXnhLbmmK/nvqTlsbHlsYLlsYLlj6Dlj6AKWzAwOjU2LjU2XeS5n+aXoOW/g+WcqOatpOa1gei/nuWBnOathwpbMDA6NTkuODJd5bCG55u45oCd5a+E5piO5pyIClswMTowMy4xMF3mnJ/nm7zkvaDog73lr5/op4kKWzAxOjA2LjUyXeWwhuS9oOWGmeS9nOivl+mYlQpbMDE6MDkuODld6YCB5Y2D6YeM5peg6YKqClswMToxMy4yOV3kvaDlsLHmmK/moqbmtbjnmb3kuobmlrDmnIgKWzAxOjE2LjY5XeaJjeS8muacieaCsuasouemu+WQiOmYtOaZtOWchue8ugpbMDE6MTkuNDFdClswMToyMC4xOF3kvaDlsLHmmK/po47mn5PnuqLkuobmnqvlj7YKWzAxOjIzLjU2XeaJjeS8muiuqeaIkeeahOaAneW/tea8q+WxsemBjemHjgpbMDE6MjYuMTFdClswMToyNi45OF3kvaDlsLHmmK/ms6rmtbjnmb3kuobliJ3pm6oKWzAxOjMwLjM0XeaJjeS8muWmguemu+S6uuadpeWOu+mjmOa0kuaRh+abswpbMDE6MzIuOTddClswMTozMy44MV3kvaDlsLHmmK/kvaDmn5PnuqLkuoblsoHmnIgKWzAxOjM3LjE2XeaUueWPmOaIkem7keeZveiAjOaXoOiogOeahOS4lueVjApbMDE6NDAuNjBdClswMTo1NC42N13lpoLmuqrmsLTmvbrmvbrmt4zov4flj6TooZcKWzAxOjU4LjI5XeW4pui1sOS6huWmguaipuiIrOeahOaXtuiKggpbMDI6MDEuMzFd5bCP5qGl5LiK5Lq65r2u57uc57uO5LiN57udClswMjowNS4wOF3nibXlvJXmiJHmgJ3nu6rlsYLlh7rkuI3ov60KWzAyOjA3Ljg1XQpbMDI6MDguMzhd6Iul5LiN6K+G5qKB56Wd5Y+Y5oiQ6J206J22ClswMjoxMS44Nl3pqb7ntKvng5/nqb/ov4flpKnkuIrlrqvpmJkKWzAyOjE1LjAxXee7neS4jeefpeS6uumXtOWkmuaEgeemu+WIqwpbMDI6MTguNzld5ZC56JC95Y+25pWj5L2c56eL6aOO5riF5YiHClswMjoyMS45Nl3lsIbnm7jmgJ3lr4TmmI7mnIgKWzAyOjI1LjI2XeW/g+e8see7u+aEj+mavuWGswpbMDI6MjguNzBd5bCG5q2k5oOF572u6ZW/5aScClswMjozMi4xNF3kvLznuYHmmJ/mmI7nga0KWzAyOjM1LjAwXQpbMDI6MzUuNTVd5L2g5bCx5piv5qKm5rW455m95LqG5paw5pyIClswMjozOC45N13miY3kvJrmnInmgrLmrKLnprvlkIjpmLTmmbTlnIbnvLoKWzAyOjQxLjQ0XQpbMDI6NDIuMjdd5L2g5bCx5piv6aOO5p+T57qi5LqG5p6r5Y+2ClswMjo0NS43OF3miY3kvJrorqnmiJHnmoTmgJ3lv7XmvKvlsbHpgY3ph44KWzAyOjQ4LjM5XQpbMDI6NDkuMjRd5L2g5bCx5piv5rOq5rW455m95LqG5Yid6ZuqClswMjo1Mi42MF3miY3kvJrlpoLnprvkurrmnaXljrvpo5jmtJLmkYfmm7MKWzAyOjU1LjI5XQpbMDI6NTUuOThd5L2g5bCx5piv5L2g5p+T57qi5LqG5bKB5pyIClswMjo1OS40MF3mlLnlj5jmiJHpu5Hnmb3ogIzml6DoqIDnmoTkuJbnlYwKWzAzOjAzLjA4XeS9oOWwseaYr+aipua1uOeZveS6huaWsOaciApbMDM6MDYuMjdd5omN5Lya5pyJ5oKy5qyi56a75ZCI6Zi05pm05ZyG57y6ClswMzowOS4wNV0KWzAzOjA5LjY2XeS9oOWwseaYr+mjjuafk+e6ouS6huaeq+WPtgpbMDM6MTMuMTBd5omN5Lya6K6p5oiR55qE5oCd5b+15ryr5bGx6YGN6YeOClswMzoxNi41OV3kvaDlsLHmmK/ms6rmtbjnmb3kuobliJ3pm6oKWzAzOjE5Ljk0XeaJjeS8muWmguemu+S6uuadpeWOu+mjmOa0kuaRh+abswpbMDM6MjIuNzJdClswMzoyMy4zM13kvaDlsLHmmK/kvaDmn5PnuqLkuoblsoHmnIgKWzAzOjI2Ljc5XeaUueWPmOaIkem7keeZveiAjOaXoOiogOeahOS4lueVjA=="
      },
      {
        songname:'团团圆圆',
        songername:'SING女团',
        songcover:'//y.gtimg.cn/music/photo_new/T001R300x300M000002oNvvt1EjQYK.jpg?max_age=2592000',
        songurl:'http://111.13.137.27/amobile.music.tc.qq.com/C4000044koEO1Pn26Y.m4a?guid=9247888695&vkey=F7553505A67CDA00BCB82B9AC67E591D742D6F9BDA08C92FFDB5FA50FA66246D02F73B9EBF6A09D9B8DBDA19AF76579F23DA4BA6F2735408&uin=3442&fromtag=66',
        lyric:"W3RpOuWbouWbouWchuWchl0KW2FyOlNJTkflpbPlm6JdClthbDrlm6Llm6LlnIblnIZdCltieTpdCltvZmZzZXQ6MF0KWzAwOjAwLjAwXeWbouWbouWchuWchiAtIFNJTkflpbPlm6IKWzAwOjA0LjQ5Xeivje+8muadjuaHi+aJrO+8iFQyb++8iQpbMDA6MDguOTld5puy77ya5p2O5oeL5oms77yIVDJv77yJClswMDoxMy40OF3nvJbmm7LvvJrlvpDkuIAv57qq57K55biM77yIRy1UcmFjee+8iS/otLrpkasKWzAwOjE3Ljk4XeaYpea7oeWfjiDmjJHoirHnga8g56qX5aSW54iG56u55aOw6Zi16Zi1ClswMDoyMS42OF3miZPlvIDpl6gg6L+O6LS15Lq6IOaVsumUo+aJk+m8k+i0uuaWsOaYpQpbMDA6MjUuNTBd5Y+25b2S5qC5IOS4h+eJqeeUnyDmmKXpo47mlbLmiZPnnYDln47pl6gKWzAwOjI5LjI3XeWwseaYr+Wkp+ihl+Wwj+W3t+e7k+W9qeWPiOW8oOeBrwpbMDA6MzIuNTJdClswMDozMy4wNV3otorov4fln44g5Y+I5LiA5p2RIOiwgeWutui+nuaXp+mereeCruWjsApbMDA6MzYuOTVd5Liy5Liq6ZeoIOiuv+aVheS6uiDmrKLmrYznrJHor63nmoTmsJTmsJsKWzAwOjQwLjgwXem+memXqOmYtSDpqbHlr5Llhrcg5Lq66YCi5Zac5LqL5pu057K+56WeClswMDo0NC42Nl3lsLHmmK/llpznnInnrJHnnLzpobrliKnlj4jpq5jljYcKWzAwOjQ4LjQ1XeWUseS4gOmBjQpbMDA6NDkuNDRd5bm05bm05bm06LS65paw5bm0ClswMDo1MS4xNF3lpKnlpKnlpKnov5nkuIDlpKkKWzAwOjUzLjAyXeWchuWchuWchum9kOWbouWchgpbMDA6NTYuMjNdClswMDo1Ni44N13pl7Tpl7Tpl7Tov5nml7bpl7QKWzAwOjU4LjcwXeeCueeCueeCueWNgeS6jOeCuQpbMDE6MDAuNzZd5ZyG5ZyG5ZyG6b2Q5Zui5ZyGClswMTowMy43Ml0KWzAxOjA0LjQ2Xei/h+aWsOW5tCDnqb/mlrDooaMKWzAxOjA2LjI2XeW/g+iKseaAkuaUvuS6jOWNgeS4gApbMDE6MDguMDld5LqM5LqU5YWtIOS6jOS6lOS4gwpbMDE6MTAuMDNd5LqM5YWr5LqM5Lmd5Yiw6Zmk5aSVClswMToxMS45OF3liLDpmaTlpJUg5pil5ruh5ZywClswMToxMy44M13llpznrJHpopzlvIDmt7vnpo/msJQKWzAxOjE1LjgxXeelneS9oOWkp+WQieWPiOWkp+WIqQpbMDE6MTcuNzJdUyBJIE4gRwpbMDE6MTkuNThdClswMTozNC42OF3mmKXmu6Hln44g5oyR6Iqx54GvIOeql+WklueIhuerueWjsOmYtemYtQpbMDE6MzguMzVd5omT5byA6ZeoIOi/jui0teS6uiDmlbLplKPmiZPpvJPotLrmlrDmmKUKWzAxOjQyLjIzXeWPtuW9kuaguSDkuIfniannlJ8g5pil6aOO5pWy5omT552A5Z+O6ZeoClswMTo0Ni4wOV3lsLHmmK/lpKfooZflsI/lt7fnu5Plvanlj4jlvKDnga8KWzAxOjQ5LjI2XQpbMDE6NDkuODVd6LaK6L+H5Z+OIOWPiOS4gOadkSDosIHlrrbovp7ml6fpnq3ngq7lo7AKWzAxOjUzLjY5XeS4suS4qumXqCDorr/mlYXkurog5qyi5q2M56yR6K+t55qE5rCU5rCbClswMTo1Ny42Ml3pvpnpl6jpmLUg6amx5a+S5Ya3IOS6uumAouWWnOS6i+abtOeyvuelngpbMDI6MDEuNDRd5bCx5piv5Zac55yJ56yR55y86aG65Yip5Y+I6auY5Y2HClswMjowNS4yMF3llLHkuIDpgY0KWzAyOjA1Ljk3XeW5tOW5tOW5tOi0uuaWsOW5tApbMDI6MDcuODdd5aSp5aSp5aSp6L+Z5LiA5aSpClswMjowOS44Nl3lnIblnIblnIbpvZDlm6LlnIYKWzAyOjEyLjcwXQpbMDI6MTMuNTld6Ze06Ze06Ze06L+Z5pe26Ze0ClswMjoxNS42MV3ngrnngrnngrnljYHkuozngrkKWzAyOjE3LjYwXeWchuWchuWchum9kOWbouWchgpbMDI6MjEuMTFd6L+H5paw5bm0IOepv+aWsOihowpbMDI6MjMuMDFd5b+D6Iqx5oCS5pS+5LqM5Y2B5LiAClswMjoyNC45MV3kuozkupTlha0g5LqM5LqU5LiDClswMjoyNi44OV3kuozlhavkuozkuZ3liLDpmaTlpJUKWzAyOjI4LjgyXeWIsOmZpOWklSDmmKXmu6HlnLAKWzAyOjMwLjY4XeWWnOeskeminOW8gOa3u+emj+awlApbMDI6MzIuNjBd56Wd5L2g5aSn5ZCJ5Y+I5aSn5YipClswMjozNC41NF1TIEkgTiBHClswMjozNi45NF3lubTlubTlubTotLrmlrDlubQKWzAyOjM4LjY0XeWkqeWkqeWkqei/meS4gOWkqQpbMDI6NDAuNjNd5ZyG5ZyG5ZyG6b2Q5Zui5ZyGClswMjo0My42OV0KWzAyOjQ0LjM4XemXtOmXtOmXtOi/meaXtumXtApbMDI6NDYuMjhd54K554K554K55Y2B5LqM54K5ClswMjo0OC4yOV3lnIblnIblnIbpvZDlm6LlnIYKWzAyOjUxLjIwXQpbMDI6NTIuMTVd5bm05bm05bm06LS65paw5bm0ClswMjo1My45N13lpKnlpKnlpKnov5nkuIDlpKkKWzAyOjU2LjAwXeWchuWchuWchum9kOWbouWchgpbMDI6NTguODhdClswMjo1OS44NV3pl7Tpl7Tpl7Tov5nml7bpl7QKWzAzOjAxLjcxXeeCueeCueeCueWNgeS6jOeCuQpbMDM6MDMuNTld5ZyG5ZyG5ZyG6b2Q5Zui5ZyG"
      },
      {
        songname:'欧若拉',
        songername:'张韶涵',
        songcover:'//y.gtimg.cn/music/photo_new/T001R300x300M000002raUWw3PXdkT.jpg?max_age=2592000',
        songurl:'http://111.13.137.29/amobile.music.tc.qq.com/C400001t1qJd0DaKOs.m4a?guid=9247888695&vkey=5316C2FDE508246525254CC9ABC5C346A0DD9C115900FE24EBE051B481FA957DD6DC068B0DDE4E44C27CDF7513F99927B7A45378B980E54F&uin=3442&fromtag=66',
        lyric:"W3RpOuasp+iLpeaLiV0KW2FyOuW8oOmftua2tV0KW2FsOuasp+iLpeaLiV0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMDBd5qyn6Iul5ouJIC0g5byg6Z+25ra1IChBbmdlbGEgWmhhbmcpClswMDoxMi41MF3or43vvJrmlr3nq4sKWzAwOjI1LjAwXeabsu+8muadjuWkqem+mQpbMDA6MzcuNTFd56We56eY5YyX5p6B5ZyIClswMDozOC41MV3pmL/mi4nmlq/liqDnmoTlsbHlt4UKWzAwOjQwLjI0XeiwgeeahOiEuApbMDA6NDEuMzRd5Ye6546w5rW36KeS55qE5aSp6L65ClswMDo0My4wNV3lv73nhLbnmoTnnqzpl7QKWzAwOjQ0LjEzXeWcqOmCo+mBpei/nOeahOWcsOeCuQpbMDA6NDUuMzddClswMDo0NS45Ml3miJHnnIvop4EKWzAwOjQ2Ljk0XeaBi+S6uuW5uOemj+eahOWFieeCuQpbMDA6NDguNzFd54G16a2C5Zyo5Y+s5ZSkClswMDo1MC44NV0KWzAwOjUxLjYzXeWUseedgOWPpOiAgQpbMDA6NTIuNjVd6ZmM55Sf54af5oKJ55qE5q2M6LCjClswMDo1NC4zOV3lpKnnqbrlnKjlvq7nrJEKWzAwOjU2LjQ3XQpbMDA6NTcuMjBd5oiR55qE5LiW55WMClswMDo1OC4yMl3nvKTnurfpl6rogIAKWzAwOjU5LjQ2XQpbMDE6MDAuMDld54ix5piv5LiA6YGT5YWJClswMTowMC45N10KWzAxOjAxLjUxXeWmguatpOe+juWmmQpbMDE6MDIuMzFdClswMTowMi45M13mjIflvJXmiJHku6zmg7PopoHnmoTmnKrmnaUKWzAxOjA1LjY4XemtlOWKm+WMl+aegeWFiQpbMDE6MDcuMDVd5aWH5bm755qE6aKE6KiAClswMTowOC40N13otbblv6vljrvmib7kuI3mgJ3orq7nmoTniLEKWzAxOjExLjMzXeeIseaYr+S4gOmBk+WFiQpbMDE6MTIuMjJdClswMToxMi43Nl3lpoLmraTnvo7lppkKWzAxOjE0LjExXeeFp+S6ruaIkeS7rOWLh+awlOeahOacquadpQpbMDE6MTYuOTRd6a2U5Yqb5YyX5p6B5YWJClswMToxNy44OF0KWzAxOjE4LjQwXeS8oOivtOeahOmihOiogApbMDE6MTkuMjhdClswMToxOS44Ml3ljp/mnaXlsLHmmK/mgYvkurrnmoTnnLzlhYkKWzAxOjI0LjA4XQpbMDE6NDUuNjBd5rKJ6buY5LiA55yo55y8ClswMTo0Ni40MV3kuIDkuIflubTlpJbnmoTlhYnlubQKWzAxOjQ3LjYyXQpbMDE6NDguMTNd5oiR55u45L+hClswMTo0OS4xNV3mnKrmnaXlhbblrp7lubbkuI3ov5wKWzAxOjUwLjk0XeWTreazo+eahOecvOazqgpbMDE6NTIuMjRd5piv5Zac5oKm55qE6LWe576OClswMTo1My4yNl0KWzAxOjUzLjgzXeaYr+WboOS4ugpbMDE6NTQuODNd5pyJ5L2g6IO95bGV57+F6auY6aOeClswMTo1Ni41M13ngbXprYLlnKjlj6zllKQKWzAxOjU4Ljc5XQpbMDE6NTkuNDJd5ZSx552A5Y+k6ICBClswMjowMC4zOV3pmYznlJ/nhp/mgonnmoTmrYzosKMKWzAyOjAyLjMwXeWkqeepuuWcqOW+rueskQpbMDI6MDQuNzhd5oiR55qE5LiW55WMClswMjowNS40N13nvKTnurfpl6rogIAKWzAyOjA3LjI3XQpbMDI6MDcuODdd54ix5piv5LiA6YGT5YWJClswMjowOS4yN13lpoLmraTnvo7lppkKWzAyOjEwLjI0XQpbMDI6MTAuODFd5oyH5byV5oiR5Lus5oOz6KaB55qE5pyq5p2lClswMjoxMy41MF3prZTlipvljJfmnoHlhYkKWzAyOjE0Ljg4XeWlh+W5u+eahOmihOiogApbMDI6MTUuODZdClswMjoxNi4zOV3otbblv6vljrvmib7kuI3mgJ3orq7nmoTniLEKWzAyOjE5LjE3XeeIseaYr+S4gOmBk+WFiQpbMDI6MjAuMDddClswMjoyMC42NV3lpoLmraTnvo7lppkKWzAyOjIyLjAzXeeFp+S6ruaIkeS7rOWLh+awlOeahOacquadpQpbMDI6MjQuNzhd6a2U5Yqb5YyX5p6B5YWJClswMjoyNi4yMF3kvKDor7TnmoTpooToqIAKWzAyOjI3LjU5XeWOn+adpeWwseaYr+aBi+S6uueahOecvOWFiQpbMDI6MzAuNTRd57qi5qmZ6buE57u/6JOdClswMjozMi43Nl0KWzAyOjMzLjM5XeS6lOW9qeeahOasp+iLpeaLiQpbMDI6MzYuMTZd54ix5bCx5Zyo5b+D5LitClswMjozOC4zNV0KWzAyOjM4LjkyXeebuOS/oeWwseS8muWtmOWcqApbMDI6NDAuOTBdClswMjo0MS43NV3nuqLmqZnpu4Tnu7/ok50KWzAyOjQzLjk3XQpbMDI6NDQuNjZd576O5Li955qE5qyn6Iul5ouJClswMjo0Ni45M10KWzAyOjQ3LjQ1XeeIseWwseWcqOW/g+S4rQpbMDI6NDkuNzFdClswMjo1MC4zMV3nm7jkv6HlsLHmmK/msLjov5wKWzAyOjUyLjI4XQpbMDM6MTYuMDFd54ix5piv5LiA6YGT5YWJClswMzoxNy4xMV3lpoLmraTnvo7lppkKWzAzOjE4LjQzXeaMh+W8leaIkeS7rOaDs+imgeeahOacquadpQpbMDM6MjEuMzRd6a2U5Yqb5YyX5p6B5YWJClswMzoyMi42OV3lpYflubvnmoTpooToqIAKWzAzOjI0LjEyXei1tuW/q+WOu+aJvuS4jeaAneiurueahOeIsQpbMDM6MjYuOTVd54ix5piv5LiA6YGT5YWJClswMzoyNy44OV0KWzAzOjI4LjQxXeWmguatpOe+juWmmQpbMDM6MjkuNzFd54Wn5Lqu5oiR5Lus5YuH5rCU55qE5pyq5p2lClswMzozMi42MV3prZTlipvljJfmnoHlhYkKWzAzOjM0LjAwXeS8oOivtOeahOmihOiogApbMDM6MzUuNDBd5Y6f5p2l5bCx5piv5oGL5Lq655qE55y85YWJClswMzozOC40NF3nuqLmqZnpu4Tnu7/ok50KWzAzOjQwLjQ1XQpbMDM6NDEuMTZd5LqU5b2p55qE5qyn6Iul5ouJClswMzo0My40NF0KWzAzOjQ0LjA3XeeIseWwseWcqOW/g+S4rQpbMDM6NDYuMThdClswMzo0Ni44NF3nm7jkv6HlsLHkvJrlrZjlnKgKWzAzOjQ4Ljc2XQpbMDM6NDkuNjJd57qi5qmZ6buE57u/6JOdClswMzo1MS44MF0KWzAzOjUyLjUwXee+juS4veeahOasp+iLpeaLiQpbMDM6NTQuNzddClswMzo1NS4yOF3niLHlsLHlnKjlv4PkuK0KWzAzOjU3LjUxXQpbMDM6NTguMDld55u45L+h5bCx5piv5rC46L+c"
      },
      {
        songname:'情花',
        songername:'本兮',
        songcover:'//y.gtimg.cn/music/photo_new/T002R150x150M000003SJOtr09YHlD.jpg?max_age=2592000',
        songurl:'http://111.13.137.29/amobile.music.tc.qq.com/C4000032fwDa0trOd1.m4a?guid=9247888695&vkey=38F38537827DD61C44C187F8345FF2754E019E2B63285E289553DE1AEF8A9920E1D9FB554404F0C3F0DE61A39585EDFCC5BE93F2732A6975&uin=3442&fromtag=66',
        lyric:"W3RpOuaDheiKsV0KW2FyOuacrOWFrl0KW2FsOuaDheiKsV0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMDBd5oOF6IqxIC0g5pys5YWuClswMDowNy4yM13or43vvJrmnKzlha4KWzAwOjE0LjQ3Xeabsu+8muacrOWFrgpbMDA6MjEuNzFd5L2g6K+055qE5oOF6IqxIOWcqOaIkeW/g+S4reato+WPkeiKvQpbMDA6MjYuMTRdClswMDoyNi44Ml3mr4/kuIDliIbkuIDnp5Lpg73mg7Mg5L2g5Zyo5oiR55qE6Lqr5peBClswMDozMi44Ml3lkKwg6L+Z5peL5b6LIOS4gOebtOWcqOiAs+i+ueeOr+e7lQpbMDA6MzYuNzVdClswMDozNy40OV3osLHmiJDmrYwg6YCB5L2g5biM5pyb5L2gIOiDveWQrOWIsApbMDA6NDIuMTddClswMDo0My45Ml3kuIrmrKHnlLXor53ph4zor7TnmoTor50KWzAwOjQ2LjM2XeaIkeacieaLv+eslOWBt+WBt+iusOS4iwpbMDA6NDkuMTBd5b2T5L2g5LiN5byA5b+D5bCx5b+157uZ5L2g5ZCsIGJhYnkKWzAwOjU0LjQ2XeaXpeiusOS4reWPr+eIseeahOmTheeslOeUuwpbMDA6NTcuMTVd54ix5YOP56eN5a2Q6Iis5Zyo5Y+R6Iq9ClswMDo1OS44M13mhaLmhaLlsIbmiJHku6znmoTot53nprvmi4nov5EKWzAxOjA0LjA3Xeetiea1h+awtOeahOaDheiKsSDpmLPlhYnkuK3kvJrokrjlj5EKWzAxOjA4Ljg4XQpbMDE6MDkuMzld5omA5Lul6KaB5o2i5Liq546v5aKD5Z+55YW75a6DClswMToxMy4xOV0KWzAxOjE0Ljg3XeimgeWPkeiKveeahOaDheiKsSDms6XlnJ/kuK3mjKPmiY4KWzAxOjE5LjUwXQpbMDE6MjAuMDRd5oOz6KaB5oiQ5Li65LiW5LiK5pyA576O55qE6IqxClswMToyNC40OF0KWzAxOjI1LjQzXeS9oOivtOeahOaDheiKsSDlnKjmiJHlv4PkuK3mraPlj5Hoir0KWzAxOjMwLjc4Xeavj+S4gOWIhuS4gOenkumDveaDsyDkvaDlnKjmiJHnmoTouqvml4EKWzAxOjM2LjY0XeWQrCDov5nml4vlvosg5LiA55u05Zyo6ICz6L65546v57uVClswMTo0MC43N10KWzAxOjQxLjQ1XeiwseaIkOatjCDpgIHkvaDluIzmnJvkvaAg6IO95ZCs5YiwClswMTo0Ni40NV0KWzAxOjQ3Ljg5XeS4iuasoeeUteivnemHjOivtOeahOivnQpbMDE6NTAuMzhd5oiR5pyJ5ou/56yU5YG35YG36K6w5LiLClswMTo1My4xMl3lvZPkvaDkuI3lvIDlv4PlsLHlv7Xnu5nkvaDlkKwgYmFieQpbMDE6NTcuOTNdClswMTo1OC40OF3ml6XorrDkuK3lj6/niLHnmoTpk4XnrJTnlLsKWzAyOjAxLjE4XeeIseWDj+enjeWtkOiIrOWcqOWPkeiKvQpbMDI6MDMuNzNd5oWi5oWi5bCG5oiR5Lus55qE6Led56a75ouJ6L+RClswMjowOC4xN13nrYnmtYfmsLTnmoTmg4XoirEg6Ziz5YWJ5Lit5Lya6JK45Y+RClswMjoxMi44NF0KWzAyOjEzLjQ3XeaJgOS7peimgeaNouS4queOr+Wig+WfueWFu+WugwpbMDI6MTcuMjFdClswMjoxOC43MF3opoHlj5Hoir3nmoTmg4XoirEg5rOl5Zyf5Lit5oyj5omOClswMjoyNC4wN13mg7PopoHmiJDkuLrkuJbkuIrmnIDnvo7nmoToirEKWzAyOjI4LjMxXQpbMDI6MjkuNjJd5L2g6K+055qE5oOF6IqxIOWcqOaIkeW/g+S4reato+WPkeiKvQpbMDI6MzQuMjRdClswMjozNC44MF3mr4/kuIDliIbkuIDnp5Lpg73mg7Mg5L2g5Zyo5oiR55qE6Lqr5peBClswMjo0MC4xMF0KWzAyOjQwLjY3XeWQrCDov5nml4vlvosg5LiA55u05Zyo6ICz6L65546v57uVClswMjo0NC43M10KWzAyOjQ1LjQyXeiwseaIkOatjCDpgIHkvaDluIzmnJvkvaAg6IO95ZCs5YiwClswMjo1MC4yMl0KWzAyOjUxLjE2XeS9oOivtOeahOaDheiKsSDlnKjmiJHlv4PkuK3mraPlj5Hoir0KWzAyOjU1LjUzXQpbMDI6NTYuMDhd5q+P5LiA5YiG5LiA56eS6YO95oOzIOS9oOWcqOaIkeeahOi6q+aXgQpbMDM6MDEuMzldClswMzowMi4wMl3lkKwg6L+Z5peL5b6LIOS4gOebtOWcqOiAs+i+ueeOr+e7lQpbMDM6MDYuMDddClswMzowNi43MF3osLHmiJDmrYwg6YCB5L2g5biM5pyb5L2gIOiDveWQrOWIsA=="
      },
      {
        songname:'孙尚香',
        songername:'柳岩/后弦',
        songcover:'//y.gtimg.cn/music/photo_new/T001R150x150M000000AXCAL40EYXS.jpg?max_age=2592000',
        songurl:'http://111.13.137.29/amobile.music.tc.qq.com/C400002os3sS2yY2eF.m4a?guid=9247888695&vkey=BBBBB81FC3218B1EE49A8BC43C45866FF1290D2116E2C67ACA5102A86284119EAFE55552055F1D8D862F89A68470600E8BA11FD66DEF29E3&uin=3442&fromtag=66',
        lyric:"W3RpOuWtmeWwmummmV0KW2FyOuafs+WyqV0KW2FsOjIzNTAwMF0KW2J5Ol0KW29mZnNldDowXQpbMDA6MDAuMTBd5a2Z5bCa6aaZICjjgIrotaTlo4HjgIvnvZHmuLjkuLvpopjmm7IpIC0g5p+z5bKpL+WQjuW8piAoSE9ITykKWzAwOjAwLjIwXeivje+8muWQjuW8pgpbMDA6MDAuMzBd5puy77ya5ZCO5bymClswMDowMC40MF0KWzAwOjIxLjg1XeWls++8muS4nOWQtOWtmemDoeS4u+WNgeS4g+S4jee7h+W4gwpbMDA6MjQuODZd5byv5byp5LiJ55m+5q2l56m/5p2o55qE5Lq654mpClswMDoyOC4xN13mlofmiY3popjlnKjor5flsL7mrabnlaXpqpHlnKjpqazog4wKWzAwOjMyLjE3XeS4ieWbvee/u+WHuuWls+WEv+iwgQpbMDA6MzUuMDRd5Lmg5q2m55qE5piO54+g6Iux6ZuE5LiN5oCd6JyAClswMDozOC4yOV3oh6rlj6Tnvo7kurrorqHnvo7kurrkuI3muIXmpZoKWzAwOjQxLjQ4XemDoeS4u+ayiemGieiJr+e8mOWxseays+aWn+a7oemFkuadrwpbMDA6NDUuNDJd5Y2K5aOB5rGf5bGx5LiN55qx55yJClswMDo0OC43M13mipjmiYflvIDotbfpgZPliKvmjKXnrJQKWzAwOjUyLjYxXeeskeminOaXoOWliOeFveWOuwpbMDA6NTYuMDVd5pWj6JC955qE5qOL5Y2a5byI5pu+5LiO5L2gClswMTowMS45Ml3lkIjvvJrpgqPnm5jkuK3mnKrlrozlvoXnu63lj6/mg5wKWzAxOjA0LjQyXeWmguaenOiuqeaIkQpbMDE6MDYuMTFd55S377ya5a2Z5bCa6aaZ5LiN6aaZ6aaZ5LiN6aaZClswMTowOC4xN13ph43ov5TkuInlm70KWzAxOjA5LjczXeeUt++8muWGt+eureaUvuS4jeaUvuaUvuS4jeaUvgpbMDE6MTEuNTVd5LiN5YGH5oCd57SiClswMToxMy40Ml3nlLfvvJrog63ohILkuLrosIHmiZHohLjkuIoKWzAxOjE1LjMwXemXruS9oOeIseaIkeWtsOWvueWtsOmUmQpbMDE6MTcuMzZd5ri45Y6G6LW36JC9ClswMToxOS42N13nlLfvvJrlrZnlsJrpppnkuI3mg7Pmg7PkuI3mg7MKWzAxOjIxLjc0Xeeskeeci+i5iei3jgpbMDE6MjMuMjRd55S377ya57qi6aKc5b2T5LiN5b2T5b2T5LiN5b2TClswMToyNS40OV3lkIjvvJrpk4HlqJjlrZDmnIjkuIvkuZ/mg4bmgIUKWzAxOjMxLjk5XemDoeS4u+WIsCAgIApbMDE6MzYuOTJd5ZCO5bymcmFwClswMTozNy42N13lsITnrq3pqpHpqazpg73mnInkuIDmiYvkuIDmiYvnu6PoirEKWzAxOjQwLjExXeixquiogOWjruivreWkuOS4i+S4gOWPo+S4gOWPo+ayj+iMtgpbMDE6NDMuMTFd5bCP5qGl5rWB5rC05YaZ5LiL5LiA6aaW5LiA6aaW5q+U5YiSClswMTo0Ni45M13kuobmnJvln47msaDnmbvkuIrkuIDmpbzkuIDmpbzliZHms5UKWzAxOjQ5LjQzXeS5oOatpueahOaYjuePoOiLsembhOS4jeaAneicgApbMDE6NTIuNjFd6Ieq5Y+k576O5Lq66K6h576O5Lq65LiN5riF5qWaClswMTo1NS45OV3pg6HkuLvmsonphonoia/nvJjlsbHmsrPmlp/mu6HphZLmna8KWzAxOjU5LjgwXeWNiuWjgeaxn+WxseS4jeeaseeciQpbMDI6MDMuOTNd5oqY5omH5byA6LW36YGT5Yir5oyl56yUClswMjowNi44N13nrJHpopzml6DlpYjnhb3ljrsKWzAyOjEwLjM3XeaVo+iQveeahOaji+WNmuW8iOabvuS4juS9oApbMDI6MTUuNzRd5ZCI77ya6YKj55uY5Lit5pyq5a6M5b6F57ut5Y+v5oOcClswMjoxOC4zN13lpoLmnpzorqnmiJEKWzAyOjIwLjM3XeeUt++8muWtmeWwmummmeS4jemmmemmmeS4jemmmQpbMDI6MjIuNDNd6YeN6L+U5LiJ5Zu9ClswMjoyNC4xMl3lhrfnrq3mlL7kuI3mlL7mlL7kuI3mlL4KWzAyOjI1Ljg3XeS4jeWBh+aAnee0ogpbMDI6MjcuODBd6IOt6ISC5Li66LCB5omR6IS45LiKClswMjoyOS4zN13pl67kvaDniLHmiJHlrbDlr7nlrbDplJkKWzAyOjMyLjE4Xea4uOWOhui1t+iQvQpbMDI6MzMuODdd55S377ya5a2Z5bCa6aaZ5LiN5oOz5oOz5LiN5oOzClswMjozNS44N13nrJHnnIvouYnot44KWzAyOjM3LjM3XeeUt++8mue6ouminOW9k+S4jeW9k+W9k+S4jeW9kwpbMDI6MzkuNTVd5ZCI77ya6ZOB5aiY5a2Q5pyI5LiL5Lmf5oOG5oCFClswMjo0Ni4zN13lpoLmnpzorqnmiJEKWzAyOjQ3LjYyXeeUt++8muWtmeWwmummmeS4jemmmemmmeS4jemmmQpbMDI6NDkuOTld6YeN6L+U5LiJ5Zu9ClswMjo1MC43NF3nlLfvvJrlhrfnrq3mlL7kuI3mlL7mlL7kuI3mlL4KWzAyOjUzLjAwXeS4jeWBh+aAnee0ogpbMDI6NTMuOTNd55S377ya6IOt6ISC5Li66LCB5omR6IS45LiKClswMjo1Ni4zN13pl67kvaDniLHmiJHlrbDlr7nlrbDplJkKWzAyOjU5LjI1Xea4uOWOhui1t+iQvQpbMDM6MDAuOTNd55S377ya5a2Z5bCa6aaZ5LiN5oOz5oOz5LiN5oOzClswMzowMy42Ml3nrJHnnIvouYnot44KWzAzOjA1LjAwXeeUt++8mue6ouminOW9k+S4jeW9k+W9k+S4jeW9kwpbMDM6MDYuNjJd5ZCI77ya6ZOB5aiY5a2Q5pyI5LiL5Lmf5oOG5oCFClswMzoxMy4xOF3lpoLmnpzorqnmiJEKWzAzOjE0LjUwXeeUt++8muWtmeWwmummmeS4jemmmemmmeS4jemmmQpbMDM6MTUuNjJd6YeN6L+U5LiJ5Zu9ClswMzoxNy44N13nlLfvvJrlhrfnrq3mlL7kuI3mlL7mlL7kuI3mlL4KWzAzOjE5LjA2XeS4jeWBh+aAnee0ogpbMDM6MjEuMzdd55S377ya6IOt6ISC5Li66LCB5omR6IS45LiKClswMzoyMy41Nl3pl67kvaDniLHmiJHlrbDlr7nlrbDplJkKWzAzOjI2LjQ0Xea4uOWOhui1t+iQvQpbMDM6MjguMTJd55S377ya5a2Z5bCa6aaZ5LiN5oOz5oOz5LiN5oOzClswMzoyOS45NF3nrJHnnIvouYnot44KWzAzOjMzLjMxXeeUt++8mue6ouminOW9k+S4jeW9k+W9k+S4jeW9kwpbMDM6MzUuMTld5ZCI77ya6ZOB5aiY5a2Q5pyI5LiL5Lmf5oOG5oCF"
      }
    ],
    zhi:0,
    kaiguan:false,
    zhuan:0,
    shichang:0,
    shichang2:0,
    chumo:0,
    bffs:0,
    yinxian:false,
    kefou:false,
    geci:''
	},
	mutations:{
    songlists:function(add,add1){
      add.songlist.push(add1)
    },
    geci:function(add,add1){
      add.geci = add1
    },
    kefou:function(add){
      add.kefou = true
    },
    xians:function(add,add1){
      add.yinxian = add1
    },
    kaiguans:function(add,add1){
      add.kaiguan = add1
    },
    qie:function(add){

      add.bffs++
      if(add.bffs == 3){
        add.bffs = 0
      }
    },
    shichang:function(add,add1){
      add.shichang = add1
    },
    shichang2:function(add,add1){
      add.shichang2 = add1
    },
    chumo:function(add,add1){
      add.chumo = add1
    },
    zhi1:function(add,add1){
      add.zhi++
      if(add.zhi == add.songlist.length){
        add.zhi = 0
      }
    },
    zhi2:function(add,add1){
      add.zhi = add1
    },
    zhi0:function(add,add1){
      if(add.zhi == 0){
        add.zhi = add.songlist.length
      }
      add.zhi--
    },
  }
});
