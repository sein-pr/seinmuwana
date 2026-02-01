// Back4App Configuration
const BACK4APP_CONFIG = {
  apiUrl: 'https://parseapi.back4app.com',
  appId: 'aPKL2bCdhkOXefXKDVGjT8btsk8CHuOM5u2eE1ys',
  clientKey: 'l1XpgYhwFfF8TatQQZ7OIe8xDzUgNvlz0hbbmf1o',
  jsKey: '2BvSDwPPwznjXJl3lmBKsBpOHDfAFTEBg7JVvRLn'
}

export async function downloadCVFromBack4App() {
  try {
    console.log('Fetching CV from Back4App...')
    
    // Fetch the File object from Back4App
    const response = await fetch(`${BACK4APP_CONFIG.apiUrl}/classes/File`, {
      method: 'GET',
      headers: {
        'X-Parse-Application-Id': BACK4APP_CONFIG.appId,
        'X-Parse-JavaScript-Key': BACK4APP_CONFIG.jsKey,
        'Content-Type': 'application/json'
      }
    })

    console.log('Response status:', response.status)
    
    if (!response.ok) {
      const errorText = await response.text()
      console.error('Back4App error response:', errorText)
      throw new Error(`Failed to fetch CV from Back4App: ${response.status} ${errorText}`)
    }

    const data = await response.json()
    console.log('Back4App response data:', data)
    
    // Get the first file object (or you can filter by specific criteria)
    if (!data.results || data.results.length === 0) {
      throw new Error('No CV file found in Back4App')
    }

    const fileObject = data.results[0]
    console.log('File object:', fileObject)
    
    // Get the resume file URL from the 'resume' column
    if (!fileObject.resume || !fileObject.resume.url) {
      throw new Error('Resume file URL not found')
    }

    const fileUrl = fileObject.resume.url
    console.log('Downloading from URL:', fileUrl)

    // Fetch the actual PDF file
    const fileResponse = await fetch(fileUrl)
    
    if (!fileResponse.ok) {
      throw new Error('Failed to download CV file')
    }

    // Get the blob
    const blob = await fileResponse.blob()
    console.log('Downloaded blob size:', blob.size)

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
    
    console.log('Download completed successfully')

  } catch (error) {
    console.error('Error downloading CV:', error)
    throw error
  }
}
