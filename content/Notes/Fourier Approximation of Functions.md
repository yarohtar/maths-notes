Consider a function $f$ on $[-1,1]$:
$$
f(x) \approx \phi_{N}(x) = \sum_{-N /2+1}^{N /2} \hat{f}_{n} e^{i\pi nx}
$$
where $N$ is even and
$$
\hat{f}_{n} = \frac{1}{2} \int_{-1}^{1} f(t) e^{-i\pi nt} dt
$$
are [[Notes/Fourier Series]] coefficients. 
[[Notes/The de la Vallee Poussin Theorem]]
[[Notes/Carlesson's Theorem]]
[[Notes/Convergence at Spectral Speed]]
### Lemma
$$
\hat{f}_{n} = \frac{1}{\pi in} \hat{f}'_{n} = \frac{1}{\pi in} \hat{f}''_{n} = \dots
$$
#### Proof
Integration by parts.
### Lemma
For nice enough $f$, $\hat{f}_{n}$ decay faster than $O(n^{-p})$ for any $p \in \mathbb{N}$
### Theorem
For nice enough $f$, we have [[Notes/Convergence at Spectral Speed]].
