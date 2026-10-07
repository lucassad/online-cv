# Luciano Assad — lucassad.com

This site keeps the Orbit theme and Jekyll framework. The public profile currently shows identity, contact links, and career history
(companies, roles, dates, and locations) from the supplied resume. Experience
descriptions and other resume sections are intentionally omitted until approved.
The profile uses the user-supplied LinkedIn photo and a modern career timeline.

## Publish and recover the domain

1. Merge these changes into `master`.
2. In repository **Settings → Pages**, select **GitHub Actions** as the source.
3. Set **Custom domain** to `lucassad.com` and save. The checked-in `CNAME`
   must match this setting.
4. Confirm your DNS points to GitHub Pages. For the apex domain, use GitHub's
   A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
   `185.199.111.153`. For `www`, use a CNAME to `lucassad.github.io`.
   See https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site
5. Wait for the **Build and deploy Jekyll to GitHub Pages** workflow to succeed,
   then enable **Enforce HTTPS** when GitHub makes it available.
6. Verify `https://lucassad.com/` and `https://lucassad.com/print` return the CV.

Pull requests build the site without deploying it. Pushes to `master` deploy it.
A GitHub Pages “Site not found” response requires checking Pages publication and
its custom-domain mapping; changing resume text alone cannot resolve it.

## Update the public resume

Edit `_data/data.yml`. Career entries live under `experiences.info`, matching the
Orbit templates. Add an optional `details` field only when publication copy is
approved. The supplied application PDF is not published or linked. Keep the
theme attribution. The PDF button generates a PDF from the current public site.

---

<a href="https://jekyll-themes.com">
<img src="https://img.shields.io/badge/featured%20on-JT-red.svg" height="20" alt="Jekyll Themes Shield" >
</a>

# Orbit
> This theme is designed by Xiaoying Riley at [3rd Wave Media](http://themes.3rdwavemedia.com/).
> Visit [her website](http://themes.3rdwavemedia.com/) for more themes.

I have made this into a Jekyll Theme. Checkout the live demo [here](https://online-cv.webjeda.com).

<table>
  <tr>
    <th>Desktop</th>
    <th>Mobile</th>
  </tr>
  <tr>
    <td>
        <img src="https://online-cv.webjeda.com/assets/images/desktop.png?raw=true" width="600"/>
    </td>
    <td>
        <img src="https://online-cv.webjeda.com/assets/images/mobile.png?raw=true" width="250"/>
    </td>
  </tr>
</table>

## Installation

* [Fork](https://github.com/sharu725/online-cv/fork) the repository;
* Go to settings and set master branch as Github Pages source;
* Your new site should be ready at `https://<username>.github.io/online-cv/`;
* Printable version of the site can be found at `https://<username>.github.io/online-cv/print`. Use a third party link https://pdflayer.com/, https://www.web2pdfconvert.com/ etc to get the printable PDF.

Change all the details from one place: `_data/data.yml`.

### To preview/edit locally with docker

```sh
docker-compose up
```

*docker-compose.yml* file is used to create a container that is reachable under <http://localhost:4000>.
Changes *_data/data.yml* will be visible after a while.

### Local machine

* Get the repo into your machine 

```bash
git clone https://github.com/sharu725/online-cv.git
```

* Install required ruby gems

```bash
bundle install
```

* Serve the site locally

```bash
bundle exec jekyll serve
```

* Navigate to `http://localhost:4000`


## Skins

There are 6 color schemes available:

| Blue | Turquoise | Green |
|---------|---------|---------|
| <img src="https://online-cv.webjeda.com/assets/images/blue.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/turquoise.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/green.jpg" width="300"/> |

| Berry | Orange | Ceramic |
|---------|---------|---------|
| <img src="https://online-cv.webjeda.com/assets/images/berry.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/orange.jpg" width="300"/> | <img src="https://online-cv.webjeda.com/assets/images/ceramic.jpg" width="300"/> |

## Credits

Thanks to [Nelson Estevão](https://github.com/nelsonmestevao) for all the [contributions](https://github.com/sharu725/online-cv/commits?author=nelsonmestevao).

Thanks to [t-h-e(sfrost)](https://github.com/t-h-e) for all the [contributions](https://github.com/sharu725/online-cv/commits?author=t-h-e).

Check out for more themes: [**Jekyll Themes**](http://jekyll-themes.com).

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sharu725/online-cv&type=Date)](https://star-history.com/#sharu725/online-cv&Date)

