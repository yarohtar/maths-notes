A cryptosystem consists of sets $\mathcal{M}$, $\mathcal{E}$, $\mathcal{K}$
and functions:

$$
e:\mathcal{M}\times \mathcal{K}\to \mathcal{E}
$$

$$
d:\mathcal{E}\times \mathcal{K}\to \mathcal{M}
$$

Such that $d(e(m,k),k)=m$ for all $m\in \mathcal{M}$ and $k\in \mathcal{K}$
[[Breaking Cryptosystems]]
[[Key Equivocation]]
[[Message Equivocation]]
[[Perfect Secrecy]]
[[Unicity Distance]]

### Lemma

[[Message Equivocation]]$\leq$[[Key Equivocation]]
$H(M|C)\leq H(K|C)$

#### Proof

Since $M=d(C,K)$, we know $H(M|C,K)=0$
Now calculate:

$$
\begin{align}
H(K|C)&=H(K,C)-H(C) \\
 & =H(M,K,C)-H(M|K,C)-H(C) \\
 & =H(K|M,C)+H(M,C)-H(C) \\
 & =H(K|M,C) +H(M|C)\geq H(M|C)
\end{align}
$$

### Exmples

[[Substitution cipher]]
[[Vigenere Cipher]]
[[Stream Cipher]]
[[One Time Pad]]
[[Rabin Cryptosystem]]
[[RSA Cryptosystem]]
[[Diffie Hellman Key Exchange]]
