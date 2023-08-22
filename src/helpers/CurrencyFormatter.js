import React from 'react'

export const CurrencyFormatter = (value, currency) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        minimumFractionDigits: 2,
        currency
      }) 
      return formatter.format(value)
}
