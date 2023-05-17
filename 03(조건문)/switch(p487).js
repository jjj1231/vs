let month = parseInt(prompt('1~12까지 숫자 중 한 개를 입력해 주세요'));
let monthName;

switch (month) {
    case 1:
        monthName = "1월!";
        break;
    case 2:
        monthName = "2월!";
        break;
    case 3:
        monthName = "3월!";
        break;
    case 4:
        monthName = "4월!";
        break;
    case 5:
        monthName = "5월!";
        break;
    case 6:
        monthName = "6월!";
        break;
    case 7:
        monthName = "7월!";
        break;
    case 8:
        monthName = "8월!";
        break;
    case 9:
        monthName = "9월!";
        break;
    case 10:
        monthName = "10월!";
        break;
    case 11:
        monthName = "11월!";
        break;
    case 12:
        monthName = "12월!";
        break;
    default:
        monthName = "해당하는 월이 없습니다.";

}
alert(monthName);
