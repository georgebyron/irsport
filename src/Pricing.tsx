import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Chip,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { Done } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import SectionGrid from './SectionGrid';

interface PricingEntity {
  lvl: string;
  name: string;
  price: number;
  full?: boolean;
  recommended?: boolean;
}

const Pricing = React.forwardRef((_, ref) => {
  const { t } = useTranslation();
  const pricing: Array<PricingEntity> = [
    {
      lvl: t('pricing.offers.1.lvl'),
      name: t('pricing.offers.1.name'),
      price: 80,
    },
    {
      lvl: t('pricing.offers.2.lvl'),
      name: t('pricing.offers.2.name'),
      price: 110,
    },
    {
      lvl: t('pricing.offers.3.lvl'),
      name: t('pricing.offers.3.name'),
      price: 130,
      recommended: true,
    },
    {
      lvl: t('pricing.offers.4.lvl'),
      name: t('pricing.offers.4.name'),
      price: 150,
    },
    {
      lvl: t('pricing.offers.5.lvl'),
      name: t('pricing.offers.5.name'),
      price: 210,
      full: true,
    },
  ];

  const info = [t('pricing.points.1'), t('pricing.points.2'), t('pricing.points.3')];

  return (
    <Box ref={ref as any}>
      <SectionGrid>
        <Typography variant="h4">{t('appbar.menu.pricing')}</Typography>
        <Grid container spacing={2}>
          {pricing.map((offer) => (
            <Grid key={offer.name} item md={offer.full ? 12 : 6} xs={12}>
              <Card
                sx={{
                  position: 'relative',
                  marginX: offer.recommended ? 0 : 2,
                  paddingY: {
                    md: 6,
                    xs: 1,
                  },
                  paddingX: {
                    md: offer.recommended ? 8 : 6,
                    xs: offer.recommended ? 3 : 1,
                  },
                }}
                elevation={offer.recommended ? 6 : 1}
              >
                <CardContent
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  <Typography variant="h5">{offer.lvl}</Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      marginY: {
                        md: 2,
                      },
                    }}
                  >
                    {offer.name}
                  </Typography>
                  <Chip label={`${offer.price}PLN`} color={offer.recommended ? 'success' : 'default'} />
                  {offer.recommended && (
                    <Chip
                      sx={{
                        position: 'absolute',
                        bottom: 22,
                        left: -53,
                        transform: 'rotate(33deg)',
                        boxShadow: 6,
                        paddingX: 5,
                      }}
                      label={t('pricing.highlighted')}
                      color="info"
                    />
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <List>
          {info.map((txt) => (
            <ListItem key={txt}>
              <ListItemIcon>
                <Done />
              </ListItemIcon>
              <ListItemText>{txt}</ListItemText>
            </ListItem>
          ))}
        </List>
      </SectionGrid>
    </Box>
  );
});

export default Pricing;
