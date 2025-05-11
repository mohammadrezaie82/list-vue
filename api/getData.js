// api/getData.js
export default async function handler(req, res) {
  const data = {
    projects: [
      {
        id: "3",
        title: "Build new websiteBuild new websiteBuild new websitefdssd",
        description: "Develop and deploy new company website with modern UI.",
        complete: true,
      },
      {
        id: "478e",
        title: "dsfg",
        description: "gggggggggggggggggggggggggggggggggf",
        complete: false,
      },
      {
        id: "54a2",
        title: "dsfdsfsdf",
        description: "efrefdsfdsfwefwefwef",
        complete: false,
      },
    ],
  };
  res.status(200).json(data); // بازگشت داده‌ها به صورت JSON
}
