function setInnerHtml(id: string, html: string): void {
  const element = document.getElementById(id);
  if (element !== null) {
    element.innerHTML = html;
  }
}

export default function myAgeCounter() {
  const plural = function(b: string[]): Function {
    return function(a: number): string {
      return b[
        1 === a % 10 && 11 !== a % 100
          ? 0
          : 2 <= a % 10 && 4 >= a % 10 && (10 > a % 100 || 20 <= a % 100)
          ? 1
          : 2
      ];
    };
  };
  const currentDate = new Date();
  const fullYear = new Date().getFullYear() - 1981 - 1;
  const countMonth = 11 - (10 - currentDate.getMonth());
  currentDate.setFullYear(fullYear, countMonth);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const pluralYears = plural(["год", "года", "лет"])(year);
  const pluralMonths = plural(["месяц", "месяца", "месяцев"])(month);
  const pluralDays = plural(["день", "дня", "дней"])(day);

  setInnerHtml("smart-age-year", String(year));
  setInnerHtml("smart-age-year__plural", pluralYears);
  setInnerHtml("smart-age-month", String(month));
  setInnerHtml("smart-age-month__plural", pluralMonths);
  setInnerHtml("smart-age-day", String(day));
  setInnerHtml("smart-age-day__plural", pluralDays);
}
