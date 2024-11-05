import { DUMMY_NEWS } from "@/dummy-news";

export function getAllNews() {
  return DUMMY_NEWS;
}

export function getLatestNews() {
  return DUMMY_NEWS.slice(0, 3);
}

export function getAvailableNewsYears() {
  console.log("get available news years");
  return DUMMY_NEWS.reduce((years, news) => {
    const year = new Date(news.date).getUTCFullYear();
    console.log({ year, years });
    if (!years.includes(year)) {
      years.push(year);
    }
    return years;
  }, []).sort((a, b) => b - a);
}

export function getAvailableNewsMonths(year) {
  return DUMMY_NEWS.reduce((months, news) => {
    const newsYear = new Date(news.date).getUTCFullYear();
    if (newsYear === +year) {
      const month = new Date(news.date).getUTCMonth();
      if (!months.includes(month)) {
        months.push(month + 1);
      }
    }
    return months;
  }, []).sort((a, b) => b - a);
}

export function getNewsForYear(year) {
  return DUMMY_NEWS.filter(
    (news) => new Date(news.date).getUTCFullYear() === +year
  );
}

export function getNewsForYearAndMonth(year, month) {
  return DUMMY_NEWS.filter((news) => {
    const newsYear = new Date(news.date).getUTCFullYear();
    const newsMonth = new Date(news.date).getUTCMonth() + 1;
    return newsYear === +year && newsMonth === +month;
  });
}
