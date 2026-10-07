// Back4App Configuration
const BACK4APP_CONFIG = {
  apiUrl: 'https://parseapi.back4app.com',
  appId: 'aPKL2bCdhkOXefXKDVGjT8btsk8CHuOM5u2eE1ys',
  clientKey: 'l1XpgYhwFfF8TatQQZ7OIe8xDzUgNvlz0hbbmf1o',
  jsKey: '2BvSDwPPwznjXJl3lmBKsBpOHDfAFTEBg7JVvRLn'
}

export async function downloadCVFromBack4App() {
  try {
    
    // Fetch the File object from Back4App
    const response = await fetch(`${BACK4APP_CONFIG.apiUrl}/classes/File`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': BACK4APP_CONFIG.appId,
        'X-Parse-JavaScript-Key': BACK4APP_CONFIG.jsKey,
        'Content-Type': 'application/json'
      }
    })
    
    if (!response.ok) {
      throw new Error(`Failed to fetch CV from Back4App: ${response.status}`)
    }

    const data = await response.json()
    
    // Get the first file object (or you can filter by specific criteria)
    if (!data.results || data.results.length === 0) {
      throw new Error('No CV file found in Back4App')
    }

    const fileObject = data.results[0]
    
    // Get the resume file URL from the 'resume' column
    if (!fileObject.resume || !fileObject.resume.url) {
      throw new Error('Resume file URL not found')
    }

    const fileUrl = fileObject.resume.url

    // Fetch the actual PDF file
    const fileResponse = await fetch(fileUrl)
    
    if (!fileResponse.ok) {
      throw new Error('Failed to download CV file')
    }

    // Get the blob
    const blob = await fileResponse.blob()

    // Create a download link and trigger download
    const downloadUrl = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = downloadUrl
    link.download = 'Sein_Muwana_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Clean up the URL object
    window.URL.revokeObjectURL(downloadUrl)

  } catch (error) {
    throw error
  }
}
