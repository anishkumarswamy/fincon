# Artha & Co.

A responsive static website template for a financial consultancy serving Indian clients with ties to the UAE and India.

## Run locally

From this directory, start Python's static file server:

```powershell
python -m http.server 8765
```

Then open `http://localhost:8765`.

## Publish with GitHub Pages

The GitHub Actions workflow in `.github/workflows/deploy.yml` deploys the static site whenever changes are pushed to `main`. In the repository settings, enable GitHub Pages and select **GitHub Actions** as the build and deployment source. The site will then be available at `https://anishkumarswamy.github.io/financialconsultancy/`.

## Before publishing

- Replace the profile prompts on `consultant.html` with the consultant's verified name, professional history, qualifications and regulatory authorisations. Do not publish unverified claims.
- Replace the Artha & Co. working brand name if needed.
- Review `privacy.html` with the business's legal/privacy adviser. Add the legal entity, contact details, actual data-handling practices and any configured hosting or communication providers.
- Review the scope-of-services and general-information disclaimers for the relevant jurisdictions.
- The enquiry form opens a draft in the visitor's default email application. It does not send or store form details on this site; the visitor must add the consultant's email address before sending. Connect a reviewed, secure enquiry service before collecting enquiries directly.
- The photography and typefaces load from Unsplash and Google Fonts. Self-host approved assets if you prefer not to make third-party requests.
