import './Accessory.css';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';
import image5 from './image5.jpeg';
import image6 from './image6.jpeg';
import image7 from './image7.jpeg';
import image8 from './image8.jpeg';
import image9 from './image9.jpeg';
import image10 from './image10.jpeg';
import image11 from './image11.jpeg';
import image12 from './image12.jpeg';
import image13 from './image13.jpeg'
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import Button from '@mui/material/Button';
import BlindIcon from '@mui/icons-material/Blind';
import IconButton from '@mui/material/IconButton';
import RateReviewIcon from '@mui/icons-material/RateReview';


function Accessory() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
      const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleSubmitFeedback = async () => { // Note the async keyword here
      try {
        // Start the wait process
        await new Promise((resolve) => setTimeout(resolve, 1000)); // waits for 3 seconds
    
        // After the wait, show the Snackbar
        setOpenSnackbar(true);
      } catch (error) {
        // Handle any possible errors that might come from your wait logic
        console.error(error);
      } finally {
        // This will run regardless of whether the above try/catch succeeded or failed
        // Close the dialog
        setOpen(false);
      }
    };
    
    
    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };
    useEffect(() => {
        ReactGA.send({
          hitType: 'pageview',
          page: window.location.pathname,
          title: 'Accessories',
        });
    }, []); // Adding empty dependency array to ensure the effect runs only once on mount

    const [imageIndex, setImageIndex] = useState(0);
    const [imageSrc, setImageSrc] = useState([image1, image2, image12]);
    const location = useLocation();
    const { category, image } = location.state || {};

    // Fallback image when the generated outfit image is empty or undefined
    const fallbackImage = './default-outfit.jpeg'; // Example fallback image

    // Set image sources based on category prop
    useEffect(() => {
        if (category === 'Formal') {
            setImageSrc([image1, image2, image12]);
        } else if (category === 'Casual') {
            setImageSrc([image9, image10, image11]);
        } else if (category === 'Social') {
            setImageSrc([image6, image7, image8]);
        } else {
            setImageSrc([image3, image4, image5]);
        }
    }, [category]); // This effect should update when 'category' changes

    // Handle the click event to generate another accessory
    const handleGenerateOutfitClick = () => {
        setImageIndex((imageIndex + 1) % imageSrc.length);
    };

    return (
        <div className="flex-container">
            <div className="col1">
                <h2>Add Accessories</h2>
            </div>
            <div className="col2">
                <h2>Generated Outfit</h2>
                <img
                    className="imgg"
                    src={image || image13} // Use fallback image if 'image' is empty
                    alt="Generated outfit"
                />
            </div>
            <div className="col3">
                <h2>Generated Accessory</h2>
                {imageSrc.length > 0 && (
                    <>
                        <img
                            className="imggg"
                            src={imageSrc[imageIndex]}
                            alt="Generated accessory"
                        />
                        <button onClick={handleGenerateOutfitClick}>Generate Another Accessory</button>
                    </>
                )}
            </div>
            <IconButton
        onClick={handleClickOpen}
        sx={{
          position: 'fixed',
          bottom: 30,
          right: 10,
          border: '1px solid #ddd', // Add a border with your desired color and width
          borderRadius: '50%', // Make it round
          backgroundColor: 'white', // Optional: set a background color
          '&:hover': {
            backgroundColor: 'grey.200', // Change the background color on hover
          },
          // Use the theme's spacing to increase the size
          height: theme => theme.spacing(8),
          width: theme => theme.spacing(8),
        }}
      >
        <RateReviewIcon fontSize="large" />
      
       
      </IconButton><Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle>Feedback</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="how well did the suggested accessories (such as jewelry, hats, belts, bags, etc.) complement the outfit recommendations? "
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label=" How would you rate the variety of accessory options provided on the website?"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="How easy was it to select and customize accessories to match your outfits?"
            type="text"
            fullWidth
            variant="standard"
          />
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  onClick= {handleSubmitFeedback}>Submit</Button>
        </DialogActions>
        
      </Dialog>
      <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
          message="Feedback submitted successfully"
          action={
            <Button color="secondary" size="small" onClick={handleCloseSnackbar}>
              Close
            </Button>
          }
        />
        </div>
    );
}

export default Accessory;
