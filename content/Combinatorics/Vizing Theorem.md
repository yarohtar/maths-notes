Let $G$ be a graph with $\Delta(G)=\Delta$
Then $\chi'(G)=\Delta$ or $\chi'(G)=\Delta+1$
### Proof
Clearly $\chi'(G)\geq \Delta$
WTS $\chi'(G)\leq \Delta+1$
Induction on edges
Pick an edge $xy_{1}$ and colour everything else in $\Delta+1$
Construct the longest sequence of distinct $y_{1}y_{2}\dots y_{k}$
where if $y_{i}$ is missing colour $c_i$ then $xy_{i+1}$ is coloured $c_{i}$
#### Case 1
No $y$ such that $xy$ is coloured $c_{k}$
Note $k\leq \Delta$
Now recolour $y_{i}$ with colour $c_{i}$
#### Case 2
$c_{k}=c_{j}$ for some $j<k$
Recolour $y_{i}$ with $c_{i}$ for $1\leq i<j$
leaving $y_{j}$ uncoloured, so WLOG $j=1$
and $y_{1}$ is uncoloured with $c_{1}=c_{k}$ missing at $y_{1},y_{k}$
Let $c$ be a colour unused in $x$
If $y_{1}$ is not in the same $c,c_{1}$ component as $x$ 
then recolour that component 
Similarly for $y_{k}$
Now $H$ is a $c,c_{1}$ component containing $x,y_{1},y_{k}$
Note that $H$ is a path or an even cycle
But one of $c,c_{1}$ is missing at each of $x,y_{1},y_{2}$ 
so $H$ cannot exist.