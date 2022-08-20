namb = prompt ('Введите число');
if (isNaN(namb)) {
    console.log('Упс, кажется, вы ошиблись');
}
else if (namb % 2) {
    console.log("Не чётное")
} else {
    console.log("Чётное")
}