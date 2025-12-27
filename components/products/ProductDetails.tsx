'use client';

import { Container, Typography, Box, Chip, Button, Alert, Rating, Grid } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductDetailsProps {
    product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Button 
                component={Link}
                href="/"
                startIcon={<ArrowBackIcon />} 
                sx={{ mb: 4 }}
                color="inherit"
            >
                Back
            </Button>

            <Grid container spacing={6}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Box sx={{ 
                            position: 'relative', 
                            height: '400px', 
                            width: '100%',
                            bgcolor: 'white',
                            p: 4,
                            borderRadius: 2,
                            boxShadow: 1
                        }}>
                             {/* Use regular img if Next Image is tricky with external domains without config */}
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                            />
                        </Box>
                    </motion.div>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Chip label={product.category} color="secondary" variant="outlined" sx={{ mb: 2, textTransform: 'capitalize' }} />
                        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                            {product.title}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Rating value={product.rating.rate} readOnly precision={0.5} />
                            <Typography variant="body1" color="text.secondary" sx={{ ml: 1 }}>
                                ({product.rating.count} reviews)
                            </Typography>
                        </Box>

                        <Typography variant="h3" color="primary" fontWeight="bold" gutterBottom>
                             ${product.price.toFixed(2)}
                        </Typography>

                        <Typography variant="body1" color="text.secondary" paragraph sx={{ mt: 2, lineHeight: 1.8 }}>
                            {product.description}
                        </Typography>

                        <Button variant="contained" size="large" fullWidth sx={{ mt: 4, py: 1.5 }}>
                            Add to Cart
                        </Button>
                    </motion.div>
                </Grid>
            </Grid>
        </Container>
    );
}
