'use client';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Rating } from '@mui/material';
import { motion } from 'framer-motion';
import { Product } from '@/types';
import Link from 'next/link';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    transition: 'transform 0.2s',
    '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: theme.shadows[4],
    }
}));

export default function ProductCard({ product }: { product: Product }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ height: '100%' }}
        >
            <Link href={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                <StyledCard>
                    <Box sx={{ position: 'relative', pt: '100%'  }}>
                        <CardMedia
                            component="img"
                            image={product.image}
                            alt={product.title}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                p: 2,
                            }}
                        />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Typography gutterBottom variant="h6" component="div" noWrap sx={{ fontSize: '1rem', fontWeight: 600 }}>
                            {product.title}
                        </Typography>
                        <Chip label={product.category} size="small" color="secondary" variant="outlined" sx={{ alignSelf: 'start', mb: 1 }} />
                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                            <Rating value={product.rating.rate} readOnly precision={0.5} size="small" />
                            <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                                ({product.rating.count})
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 'auto' }}>
                            <Typography variant="h6" color="primary" fontWeight="bold">
                                ${product.price.toFixed(2)}
                            </Typography>
                        </Box>
                    </CardContent>
                </StyledCard>
            </Link>
        </motion.div>
    );
}
