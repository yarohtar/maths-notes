---
{"publish":true,"aliases":"Game","created":"2026-01-11T16:39:12.877+00:00","modified":"2026-01-11T16:52:41.437+00:00","cssclasses":""}
---

Given a [[Foundations/Infinite Games/Game Tree]] $Y$, its [[Foundations/Infinite Games/Game Space]] $\mathcal{F}(Y)$ and a set $A\subseteq \mathcal{F}(Y)$,
we define $\mathcal{G}(A,Y)$ to be the two person infinite game of perfect information.
### Interpretation
Player `I` and Player `II` play $\omega$ moves alternating 
(`I` plays even indices, while `II` plays odd ones).
At each stage, they can only play moves such that the finite sequence of moves played so far is in $Y$.
After $\omega$ moves, we have a sequence $p\in \mathcal{F}(Y)$. 
Then we say that `I` wins if $p\in A$, while `II` wins if $p\in \mathcal{F}(Y)\setminus A$.
