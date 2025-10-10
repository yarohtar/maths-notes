Given a [[Notes/Cryptosystem]] $\mathcal{M}$, $\mathcal{E}$, $\mathcal{K}$, with functions $e$ and $d$.
Eve may know $e$ and $d$, as well as probability distributions 
of $\mathcal{M}$ and $\mathcal{K}$
we consider three possible levels of attack:
1. Eve knows some piece of ciphertext
2. Eve knows a considerable length of plaintext 
   and the corresponding ciphertext
   but not the key
3. Eve can acquire the ciphertext for any plaintext message

Both [[Notes/Substitution cipher]] and [[Notes/Vigenere Cipher]] 
for an English text fail at level 1 for sufficiently long messages
because we can just perform a frequency analysis
Even for suitably random plaintext, both of them fail at level 2

