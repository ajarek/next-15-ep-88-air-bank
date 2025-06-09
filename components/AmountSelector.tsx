/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AmountSelector = () => {
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [showCustomInput, setShowCustomInput] = useState(false);

  const predefinedAmounts = [100, 200, 300, 400, 500];

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount.toString());
    setShowCustomInput(false);
    setCustomAmount('');
  };

  const handleOtherSelect = () => {
    setShowCustomInput(true);
    setSelectedAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(value);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (selectedAmount) {
      console.log('Selected amount:', selectedAmount);
      // Tutaj można dodać logikę przesyłania danych
      alert(`Wybrana kwota: ${selectedAmount}`);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-primary to-slate-900 flex items-center justify-center p-4 rounded-lg shadow-xl">
      <div className="w-full ">
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Choose Amount</h2>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {predefinedAmounts.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => handleAmountSelect(amount)}
                className={`
                  h-20 rounded-lg border-2 transition-all duration-200 font-semibold text-lg
                  ${selectedAmount === amount.toString()
                    ? 'border-violet-500 bg-primary-500/20 text-white' 
                    : 'border-primary/50 bg-slate-800/50 text-white hover:border-primary hover:bg-primary/10'
                  }
                `}
              >
                {amount}
              </button>
            ))}
            
            <button
              type="button"
              onClick={handleOtherSelect}
              className={`
                h-20 rounded-lg border-2 transition-all duration-200 font-semibold text-lg
                ${showCustomInput
                  ? 'border-purple-500 bg-purple-500/20 text-purple-300' 
                  : 'border-purple-500/50 bg-slate-800/50 text-white hover:border-purple-400 hover:bg-purple-500/10'
                }
              `}
            >
              Other
            </button>
          </div>

          {showCustomInput && (
            <div className="space-y-2">
              <Label htmlFor="custom-amount" className="text-white">
                Enter custom amount
              </Label>
              <Input
                id="custom-amount"
                type="number"
                placeholder="Enter amount"
                value={customAmount}
                onChange={handleCustomAmountChange}
                className="bg-slate-800/50 border-primary/50 text-white placeholder:text-gray-400 focus:border-primary"
                min="1"
              />
            </div>
          )}

          <Button 
            onClick={handleSubmit} 
            disabled={!selectedAmount}
            className="w-full bg-purple-600 hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Confirm Amount
          </Button>

          {selectedAmount && (
            <div className="text-center text-purple-300">
              Selected: <span className="font-bold">{selectedAmount}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AmountSelector;