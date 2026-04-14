const NOTES = {
    "AP Biology": {
        units: {
            "Unit 1: Chemistry of Life": {
                tags: ["characteristics of life", "feedback", "scientific method", "chemistry", "macromolecules"],
                content: `
                    <h2 id="h-ch1a">Chapter 1A: A View of Life — Overview</h2>
                    <h3>Characteristics of Life</h3>
                    <ul>
                        <li>Organized and made of at least one cell</li>
                        <li>Acquire/use materials and energy from the original source of the sun to do work and carry out all cellular processes <strong>metabolism</strong></li>
                        <li>Maintain <strong>homeostasis</strong> (stable internal balance) through negative feedback mechanisms</li>
                        <li>Respond to stimuli in environment (ex: heat, sun, plants growing against the force of gravity)</li>
                        <li>Reproduce, grow, and develop by passing on genetic info/DNA to the next generation, which is crucial for a species but not an individual</li>
                        <li>Evolve and adapt: changing environments cause populations (not individuals) to adapt/modify to function better with favorable variations selected for</li>
                    </ul>

                    <h3>Levels of Organization</h3>
                    <p>Atoms --> Molecule (2+ atoms of same/different elements) --> Cell --> Tissue --> Organ --> Organ System --> Organism (an individual) --> Population (organisms of same species in an area) --> Community (interacting living populations in an area) --> Ecosystem (living + nonliving in a particular area) --> Biome (same ecosystems all over the world) --> Biosphere (Earth)</p>

                    <h3>Feedback Mechanisms</h3>
                    <p>Used to maintain internal environments in response to internal/external changes</p>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">Negative feedback</p>
                            <ul>
                                <li>Maintain homeostasis by keeping variables close to the target set point (ex: body temperature, blood glucose/pH, thermoregulation through sweating/shivering)</li>
                                <li>Body reacts to environment</li>
                                <li>Sensors detect environmental changes causing body imbalance, control/regulatory centers initiate actions to bring conditions back to normal, then once its normal, inhibitory mechanisms reverse these actions to avoid overcorrection</li>
                                <li>Dynamic equilibrium</li>
                                <li><strong>Thermoregulation:</strong> higher temperature = faster molecules = faster reactions and metabolism</li>
                                <li>Endotherms: warm-blooded, warmed by internal metabolic processes</li>
                                <li>Exotherms: cold-blooded, gaining heat from external synthesis w/ little metabolic heat</li>
                            </ul>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Positive feedback</p>
                            <ul>
                                <li>Mechanism amplifying a change and achieving a goal (NOT homeostasis or equilibrium)</li>
                                <li>Conditions moved further and further from initial set point as response gets intense, until an endpoint is reached which stops process</li>
                                <li>Usually some hormone or impulse causing the mechanism</li>
                                <li>Ex: labor onset / childbirth, breastfeeding, blood platelet activation, fruit ripening</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Scientific Method</h3>
                    <ol>
                        <li>Make observations</li>
                        <li>Pose a specific testable measurable question w/ one independent manipulated variable</li>
                        <li>Research the question</li>
                        <li>Formulate a working testable hypothesis as a statement (no words like proved/disproved, use supported/rejected/refuted/reformed)</li>
                        <li>Repeatable controlled experiment w/ multiple trials/test subjects and large sample size (n) for more accurate results, only one variable altered at a time
                            <ul>
                                <li>Controls/constants - controlled variables kept identical in all setups</li>
                                <li>Control groups - standard of comparison to validate experimental results
                                    <ul>
                                        <li>Negative control - show what happens when IV is absent or has no effect to ensure no contamination, confounders, or false positives/placebos</li>
                                        <li>Positive control - show what a known measurable response looks like to ensure experiment is working properly, no false negatives</li>
                                    </ul>
                                </li>
                                <li>Experimental groups - groups that get experimental treatment</li>
                                <li>Independent variable - manipulated variable by experimenter on x-axis</li>
                                <li>Dependent variable - variable that changes/responds to IV on y-axis</li>
                            </ul>
                        </li>
                        <li>Data collection/experimental observations through quantitative (numerical) and qualitative (descriptive) data</li>
                        <li>Data analysis through graphs, charts, tables, and stats</li>
                        <li>Make a conclusion w/o using prove/disprove, use supported/rejected/refuted</li>
                        <li>Communicate findings through peer-reviewed journals</li>
                    </ol>

                <h3>Graphs</h3>
                <p>Appropriate specific title (ex: The Effect of IV on DV), axes labels w/ units, key/legend, consistent appropriate scale w/ equal increments including the first increment (origin does not have to start at zero, breaks sometimes allowed, labeling the corner as 0 is for both x and y axis)</p>
                <div class="graph-grid">
                    <div class="graph-cell note-card-muted">
                        <p>Line graph</p>
                        <ul>
                            <li>Show relationship between 2 numerical, continuous variables</li>
                            <li>Visualize DV changes over time or across a gradient like temperature, distance, or pH</li>
                            <li>Data usually in a specific order</li>
                            <li>Points connected by a line, sometimes each point represents mean value w/ error bars</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Scatter plot</p>
                        <ul>
                            <li>Show relationships between 2 numerical, continuous variables</li>
                            <li>No inherent x-value order given on data table</li>
                            <li>Often used to look for correlation/association</li>
                            <li>Data points shouldn't be connected & are often scattered across graph</li>
                            <li>Trend line shows overall direction of relationship of correlation (can be curved but shouldn't extend past provided points)</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Bar graph</p>
                        <ul>
                            <li>Compare differences in dependent variable across categories/groups</li>
                            <li>Bars don't touch</li>
                            <li>Bar can represent mean value w/ error bars</li>
                            <li>Error bars = ±2 standard error of the means</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Histogram</p>
                        <ul>
                            <li>Display distribution of data showing central tendencies/spread (often looks like a bell curve)</li>
                            <li>Uniform range intervals</li>
                            <li>Bars touch</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Pie chart</p>
                        <ul>
                            <li>Compare different percentages/parts of a whole</li>
                            <li>Representative of proportion to full dataset</li>
                            <li>Usually categorical</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Log scale (semi-log)</p>
                        <ul>
                            <li>Uses logarithmic nonlinear scale if data spans very large quantities</li>
                            <li>Compress large range into small graph</li>
                            <li><em>The numbers with a 1, from low to high, are what you count from, and what you count by</em></li>
                            <li>Count by the same increment of 10 until the next multiple of 10</li>
                            <li>Value of a point between two tick marks is geometric mean of tickmark values: √(xy), or you can approximate by being about half the average between the lines</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Dual Y-axes</p>
                        <ul>
                            <li>Used to portray two different dependent variables w/ different units or measurement/number ranges/magnitudes</li>
                            <li>Labels on both ends, key showing different colors</li>
                        </ul>
                    </div>
                    <div class="graph-cell note-card-muted">
                        <p>Box and whisker</p>
                        <ul>
                            <li>Compare spread and distribution summary on an interval</li>
                            <li>Show skewed data or outliers, median/middle value, range, and interquartile range (show how spread out data is)</li>
                            <li>Can be horizontal or vertical</li>
                            <li>Start line = min; start of box = Q1; middle = median (Q2); end of box = Q3; end line = max; whiskers = range; box length = IQR; points outside = outliers
                                <ul>
                                    <li>Q1 and Q3 are medians of the lower and upper halves of dataset</li>
                                    <li>Outliers can be represented as single data points outside the box/whiskers</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <h2 id="h-ch1b">Chapter 1B: Math & Statistical Applications</h2>
                <ul>
                    <li>Metric System: KHDUDCM**M**N</li>
                    <li>Mean/average = sum of all data points / # of items</li>
                    <li>Median/middle value = middle value of dataset of average of 2 middle vales</li>
                    <li>Mode = most frequent value in dataset</li>
                    <li>Range = difference between max-min</li>
                    <li><strong>Standard Deviation</strong>: measure of how far spread out a dataset is or how much it deviates/how far away it is from the mean
                        <ul>
                            <li>Higher SD = most data points are further from mean</li>
                            <li>Higher range = higher standard deviation</li>
                            <li>Zero = all values are identical</li>
                            <li>Formula on reference table: xi = value of one point, x with line over = mean, sigma = sum, n=sample size</li>
                            <li>68-95-99.7 (+- 1 std is 68%, +-2std is 95%, +-3std is 99.7% of mean) - empirical normal distribution or bell curve</li>
                        </ul>
                    </li>
                    <li><strong>Standard Error</strong>: measure how well the sample mean match up to the true population mean
                        <ul>
                            <li>Measure variation in sample means of datasets from the same population</li>
                            <li>Formula on reference table: s=standard deviation, n=sample size</li>
                            <li>Higher standard deviation = higher standard error</li>
                            <li>Error bars = +/- 2SEm above and below the bar or dot which is the mean (95% CI)
                                <ul>
                                    <li>Shows statistical significance - if the bars overlap its insignificant</li>    
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Null Hypothesis</strong>: statistical hypothesis that states that any difference between 2 factors is purely due to chance and there is no causal statistically significant relationship between 2 variables.
                        <ul>
                            <li>Or if the scenario presents statistical expectation, null hypothesis assumes outcome = statistical expectation</li>
                        </ul>
                        <div class="note-grid-2" style="margin:10px 0;">
                            <div class="note-card">
                                <p class="note-card-title">Results are significant</p>
                                <p style="margin:0;font-size:13px;">Null hypothesis is <strong>rejected</strong> — statistically significant difference.</p>
                            </div>
                            <div class="note-card">
                                <p class="note-card-title">Results are insignificant</p>
                                <p style="margin:0;font-size:13px;">Null hypothesis <strong>fails to be rejected</strong> — no statistically significant difference.</p>
                            </div>
                        </div>
                        <p style="font-size:12.5px;color:var(--ink3);margin-top:6px;">Not the same as the experimental hypothesis.</p>
                    </li>
                    <li><strong>Chi-Square Analysis</strong>: evaluate null hypothesis and see if difference in observation is significant or not in categorical data
                        <ul>
                            <li>Formula on reference table (o=observed value, e=expected value, x^2=chi square value)</li>
                            <li>Compare this value to critical chi square value table that corresponds to pvalues based on degrees of freedom</li>
                            <li>Degrees of freedom = # of outcomes/categories - 1</li>
                            <li>P-value = value between 0 and 1 determining significance, smaller (less than 0.05) is 95% CI significant</li>
                            <li>Critical chi-square values - values to use as benchmarks to compare your chi-square value at p=0.05 and p=0.01
                                <ul>
                                    <li>if value smaller than corresponding critical value  = fail to reject null</li>
                                    <li>if your chisquare is bigger = null is rejected</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                <h2 id="h-ch2a">Chapter 2A: Basic Chemistry Review</h2>
                <ul>
                    <li><strong>Matter:</strong> anything that takes up space and has mass</li>
                    <li><strong>Atom:</strong> smallest simplest unit of a substance that can't be broken down chemically or physically (+1 protons and 0 neutrons in nucleus, -1 electrons in orbitals surrounding)
                        <ul>
                            <li>If neutral, proton # = electron # (otherwise its an ion)</li>
                            <li>Protons and neutrons have 1amu mass, electrons have 1/1836amu mass (~0)</li>
                            <li>Valence electrons - electrons in valence outermost electron shell determining reactivity</li>
                            <li>Top left number is mass # (protons+neutrons), bottom left # is atomic number (# of protons which is the atom's identity)</li>
                            <li>Isotopes - atoms of same element w/ same proton number but different neutron number of mass number
                                <ul>
                                    <li>Radioisotopes — unstable nucleus, decay and emit radiation; fossil dating, radiolabeling (tracers), radiotherapy (ex: C-14, Tc-99; I-131, Co-60 for therapy)</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><strong>Element:</strong>substance composed of all same type of atom (periodic table elements). CHONP is most abundant elements, with all organic compounds having C</li>
                    <li><strong>Compound:</strong> substance w/ 2 or more different chemically bonded atoms</li>
                    <li><strong>Molecule:</strong> 2 or more nonmetal atoms chemically bonded</li>
                    <li>Some substances are both compounds and molecules (different nonmetals bonded), some are only molecules (diatomics), some are only compounds (ionic compounds)</li>
                    <li><strong>Mixture</strong>: 2 or more different substances combined physically not chemically
                        <ul>
                            <li>Molarity (M) shows how concentrated solutions are (higher molarity = more concentrated)</li>
                        </ul>
                    </li>
                    <li>Memorize: PO4^3- is phosphate, NH3 is ammonia</li>
                </ul>

                <h3>Bonding</h3>
                <ul>
                    <li>Atoms bond (gain/lose/share) to complete their valence shell and form an octet of 8 valence electrons (H and He only need 2) — octet rule</li>
                    <li>Right side / nonmetals gain electrons, left side/metals lose electrons</li>
                    <li><strong>Electronegativity</strong> — atom's tendency to attract electrons; F is most electronegative (top right on periodic table = more EN; bottom left = least)</li>
                    <li>Losing electrons makes charge more positive; gaining electrons makes charge more negative</li>
                    <li>Greater EN difference = more polar bond; ionic bond if difference &gt; 1.7</li>
                </ul>
                <div class="callout">Greater EN difference → more polar. Ionic bond if EN difference &gt; 1.7.</div>
                <div class="note-grid-3">
                    <div class="note-card">
                        <p class="note-card-title">Ionic</p>
                        <ul>
                            <li>Transfer of electrons, usually metal + nonmetal; EN difference &gt; 1.7</li>
                            <li>Ion = charged particle where proton # ≠ electron #</li>
                            <li>Ex: NaCl → Na⁺ and Cl⁻</li>
                        </ul>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Polar covalent</p>
                        <ul>
                            <li>Unequal sharing between 2 different nonmetals</li>
                            <li>Higher EN atom pulls more → partial negative (δ−); other atom → partial positive (δ+)</li>
                        </ul>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Nonpolar covalent</p>
                        <ul>
                            <li>Equal sharing between 2 same nonmetals (diatomics); no EN difference</li>
                        </ul>
                    </div>
                </div>
                <h3>Molecule polarity: SNAP</h3>
                <ul>
                    <li><em>Symmetrical molecules are nonpolar, asymmetrical molecules are polar</em></li>
                    <li>Shape and charge distribution of entire molecule affects molecule polarity</li>
                </ul>
                
                <h2 id="h-ch2b">Chapter 2B: More Basic Chemistry</h2>
                <ul>
                    <li>Intramolecular forces like ionic/covalent bonding are within a molecule/compound</li>
                    <li>Intermolecular forces are between molecules/compounds like hydrogen bonding, dipole-dipole attractions, van der waals forces, and London dispersion forces</li>
                </ul>
                <h3>Hydrogen bonding</h3>
                <ul>
                    <li>Strongest type of <em>inter</em>molecular force but weaker than intramolecular forces</li>
                    <li>Attraction between partially positive hydrogen of one molecule and a small, highly electronegative partially negative atom in another (typically F, O, N)</li>
                    <li>Water, NH₃, and HF are capable of hydrogen bonding</li>
                    <li>Molecule can H-bond if: polar/has polar bonding, has a partially positive H, and has at least one F, O, or N</li>
                </ul>

                <h3>Properties of water</h3>
                <p>Life depends on water.</p>
                <p><strong>Structure:</strong> polar covalent bonding between O and H; polar/asymmetrical molecule; hydrogen bonding between molecules → unique properties.</p>
                <div class="note-grid-2">
                    <div class="note-card-muted">
                        <p class="note-card-title">High specific heat</p>
                        <p style="margin:0;font-size:12.5px;">Lots of energy needed to raise temperature because H-bonds must be broken first. Helps organisms maintain stable internal body temperature (homeostasis).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">High heat of vaporization</p>
                        <p style="margin:0;font-size:12.5px;">Lots of energy needed liquid → gas. Enables evaporative cooling (sweating) and stable body temperature.</p>
                    </div>
                    <div class="note-card-muted" style="grid-column:1/-1;">
                        <p class="note-card-title">Cohesion, adhesion &amp; surface tension</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Cohesion</strong> — attraction between same molecules. <strong>Adhesion</strong> — attraction between different molecules. <strong>Surface tension</strong> — surface molecules pulled inward. Enables capillary action, transpiration, blood flow, meniscus, insects on water.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">Ice less dense than liquid</p>
                        <p style="margin:0;font-size:12.5px;">Ice has fewer molecules per volume — stable H-bonds spread molecules apart. Lets aquatic life survive under ice (D = m/V).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">Water as solvent</p>
                        <p style="margin:0;font-size:12.5px;">Polar water dissolves polar/ionic (<strong>hydrophilic</strong>); like dissolves like — nonpolar ↔ nonpolar (<strong>hydrophobic</strong>). Phospholipids are <strong>amphipathic</strong> (polar head, nonpolar tails) → selectively permeable membranes.</p>
                    </div>
                </div>

                <h3>Acids &amp; bases</h3>
                <div class="note-grid-2" style="margin-bottom:10px;">
                    <div class="note-card">
                        <p class="note-card-title">Acids</p>
                        <p style="margin:0;font-size:12.5px;">Yield/donate H⁺ in solution. pH &lt; 7.</p>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Bases</p>
                        <p style="margin:0;font-size:12.5px;">Yield/donate OH⁻ or accept H⁺. pH &gt; 7.</p>
                    </div>
                </div>
                <ul>
                    <li><strong>pH Scale</strong>: measures acidity/basicity of solution or concentration of H+, where 7=neutral, high=basic(lessH+), low=acidic(moreH+), and each unit is a 10-fold change in H+ concentration since pH=-log(H+)</li>
                    <li>Buffers - keep pH in normal (not necessarily neutral) limits by taking up excess H+ and OH- so drastic changes don't occur. Ex: Blood buffers like carbonic acid (weak acid) or bicarbonate (weak base) keeps blood pH at 7.4 since enzymes can denature if pH changes</li>
                </ul>

                <h2 id="h-ch3">Chapter 3: Biochemistry</h2>
                <h3>Organic Compounds</h3>
                <ul>
                    <li>Compounds containing carbon and hydrogen, basis of all living organisms</li>
                    <li>Carbohydrates, lipids, proteins, nucleic acids</li>
                    <li>Carbon useful since it's small, has 4 valence electrons, shares electrons to form 4 covalent bonds making stable molecules, forms single/double/triple bonds w itself creating chains or rings or bonds w other abundant elements (CHONPS)</li>
                    <li>Most basic category of organic compounds: hydrocarbons containing only C and H which are all nonpolar and hydrophobic</li>
                    <li><strong>Functional groups</strong>: enhance diversity of organic molecules giving function, polarity, properties, replacng one or more H atoms (ex: -OH hydroxyl group, -COOH carboxyl group, -NH2 amino group, phosphate group). Ex: testosterone vs estrogen are both steroid hormone lipids w different functional groups.</li>
                    <li><strong>Isomers</strong>: same molecular formula but different structures and properties. Ex: glucose (H on top, hexagon, cell energy broken down during cell respiration for ATP), fructose (pentagon fruit and food sweetener), galactose (OH on top, hexagon, sugar less sweet than glucose/fructose, can be combined w glucose to form lactose milk sugar, can be found outside cell membrane to play role in cell-cell recognition and identity markers) all have C6H12O6 formula</li>
                </ul>
                
                <h3>Reactions making/breaking polymers</h3>
                <p>Monomers are individual repeating subunits in biomolecules, linked through covalent bonds to form a polymer (many subunits together).</p>
                <div class="note-grid-2">
                    <div class="note-card">
                        <p class="note-card-title">Dehydration synthesis</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Anabolic</strong> — monomers joined by removing water (polymerization). Requires energy.</p>
                    </div>
                    <div class="note-card">
                        <p class="note-card-title">Hydrolysis</p>
                        <p style="margin:0;font-size:12.5px;"><strong>Catabolic</strong> — bonds broken by adding water. Releases energy overall.</p>
                    </div>
                </div>

                <h3>Carbohydrates</h3>
                <ul>
                    <li>Quick energy, sugars, rice, bread, pasta</li>
                    <li>CHO in a 1:2:1 or close ratio</li>
                    <li>Generally polar & soluble in water b/c of many OH functional groups</li>
                    <li>Monomer: monosaccharide (simple single sugar) linked together through covalent bonds called glycosidic linkage</li>
                    <li><strong>Monosaccharides:</strong> provide immediate energy for cell processes, mostly in ring shape but sometimes linear. Ex: 6 carbon sugars like glucose, fructose, galactose (cell identity marker) which are isomers of C6H12O6, or 5 carbon sugars like deoxyribose (DNA) and ribose (RNA)</li>
                    <li><strong>Disaccharides:</strong> double sugars which are 2 monosacchardies joined by dehydration synthesis. Provide semi-immediate energy when broken to monosacchardies. Ex: glucose+glucose=maltose, glucose+fructose=sucrose(table sugar), glucose+galactose=lactose(milk sugar)</li>
                            <li><strong>Polysaccharides:</strong> long-term energy storage &amp; structural support
                        <ul>
                            <li>Structural variations (shape and bonding) affect function; H-bonding increases strength; helical shapes expose linkages to enzymes</li>
                        </ul>
                        <div class="note-grid-2" style="margin:10px 0;">
                            <div class="note-card-muted">
                                <p class="note-card-title">Energy storage</p>
                                <ul style="margin:0;padding-left:16px;font-size:12.5px;">
                                    <li><strong>Starch</strong> — glucose storage in plants; digestible by humans</li>
                                    <li><strong>Glycogen</strong> — glucose storage in animals (liver &amp; muscles)</li>
                                </ul>
                            </div>
                            <div class="note-card-muted">
                                <p class="note-card-title">Structural support</p>
                                <ul style="margin:0;padding-left:16px;font-size:12.5px;">
                                    <li><strong>Cellulose</strong> — plant cell walls; not digestible by humans</li>
                                    <li><strong>Chitin</strong> — fungi cell walls; crustacean exoskeletons</li>
                                </ul>
                            </div>
                        </div>
                    </li>   
                </ul>

                <h3>Lipids</h3>
                <ul>
                    <li>CHO not in 1:2:1 ratio and sometimes P</li>
                    <li>nonpolar, fats, oils, butter</li>
                    <li>Generally insoluble/nonpolar bc of long hydrocarbon chains</li>
                    <li>No monomer subunit</li>
                    <li>Ester linkage covalent bonds link lipid components together for triglycerides and phospholipids only</li>
                    <li><strong>Triglycerides</strong>(fats/oils): CHO
                        <ul>
                            <li>Main function: long term energy storage and insulation. Made of 1 glycerol and 3 fatty acids linked together</li>
                            <div class="note-grid-2" style="margin:8px 0;">
                                <div class="note-card-muted">
                                    <p class="note-card-title">Saturated fatty acids</p>
                                    <p style="margin:0;font-size:12.5px;">Single bonds; fully surrounded by H. Solid at room temp. Linked to cardiovascular issues. Ex: animal fats, butter.</p>
                                </div>
                                <div class="note-card-muted">
                                    <p class="note-card-title">Unsaturated fatty acids</p>
                                    <p style="margin:0;font-size:12.5px;">≥1 double bond → kinks. Generally liquid at room temp. Ex: plant oils (corn oil).</p>
                                </div>
                            </div>
                        </ul>
                    </li>
                    <li><strong>Phospholipids</strong>: CHOP
                        <ul>
                            <li>Main function: plasma membrane components</li>
                            <li>Structure: phosphate group PO4^3 & glycerol making up the polar hydrophillic head, 2 fatty acids nonppolar hydrophobic tails</li>
                            <li>Membrane fluidity maintained by fatty acids, since saturated fatty acids in hotter environments prevent fluidity and unsaturated/kinky fatty acids in colder environments prevent rigidity (less fluid = less permeable)</li>
                            <li>Phospholipid bilayer w nonpolar tails facing each other and polar heads facing outside since internal/external environments are mostly water so this is stable configuration</li>
                            <li>SELECTIVE PERMEABILITY: small nonpolar molecules easily pass, small polar molecules sometimes cross but usually need help from transport proteins. Ions & larger polar molecules either don't cross or need help from transport proteins. Large macromolecules like starch, proteins, and DNA don't pass since they are too big and need bulk transport, not even trasnport protein.</li>
                        </ul>
                    </li>
                    <li><strong>Steroids</strong>: CHO
                        <ul>
                            <li>Steroid - hormones that act as intracellular ligands/signalling molecules to help cells communicate</li>
                            <li>Ex: sex hormones like testosterone/estrogen help develop male/female reproductive organs and secondary sex characteristics, stress hormones like cortisol sends signals breaking down carbs/fats for energy</li>
                            <li>Cholesterol - steroid and another cell membrane component keeping membrane appropriately fluid (stabilize at high temps through weak hydrophobic fatty acid tail interactions, prevent phospholipid stiffness at lowtemps). Precursor to sex hormone production. Too much cholesterol = hydrophobic so can cause circulation disorders</li>
                            <li>Structure: four fused carbon rings: functional groups on ends add diversity</li>
                        </ul>
                    </li>
                    <li><strong>Waxes</strong>: CHO
                        <ul>
                            <li>Protection & excessive waterloss prevention since they're hydrophobic</li>
                            <li>Structure: long chain fatty acids bonded to long chain alcohols</li>
                            <li>Ex: earwax traps dust/dirt from entering ear canal, waxy plant leaf coating prevents water loss</li>
                        </ul>
                    </li>
                </ul>

                <h3>Proteins</h3>
                <ul>
                    <li>CHON and sometimes S</li>
                    <li>Monomer: amino acid (structure is a central Carbon, an amino group to the left (NH2), and a carboxyl group to the right (COOH), a Hydrogen on top, and a variant R group which makes each amino acid unique on bottom)</li>
                    <li>R groups can have a charge (ionized), different R groups affect function and folding</li>
                    <li>Amino acid sequence within a species is very similar but differs more between species caused by DNA variation (more similar DNA = more closely related organisms)</li>
                    <li>Different amino acid sequence = different shape/folding = different function since different shapes prevents enzymes or hormones or antibodies from working</li>
                    <li>Peptide covalent bonds link amino acids together in a protein</li>
                    <li>Polymer: long chain of many amino acids linked together called polypeptides</li>
                    <li>Proteins are a polypeptide chain folded into a specific shape</li>
                    <li>Polypeptide chains have directionality, the N-terminus is the amino NH2 group end and the C-terminus is the carboxyl COOH group end where new amino acids get added</li>
                    <li>Ex: enzymes speed up reactions, keratin supports hair/nails, collagen supports skin, channel/carrier proteins transport substance, hemoglobin transports O2 in blood to cells, antigens mark cells as foreign, antibody proteins made by immune system to defend against foreign invaders, insulin is a ligand protein that lowers blood glucose, HGH (human growth hormone) ligand stimulates growth in childhood and cell reproduction, neurotransmitter ligands enable nerve cell communication, protein receptors receive ligand and react, actin/myosin are contractile proteins allowing motion/muscle contractions</li>
                    <li>Different specialized cells make or activate different types of proteins in abundance</li>
                    <li>Up to 4 levels of protein structure b/c of folding (not all proteins have all 4 levels)</li>
                    <li>Chaperone proteins — help proteins fold if needed or correct misfolding</li>
                    <li>If folding is disrupted, protein denatures and all proteins work at specific temperatures and pH levels</li>
                    <li>Temperatures above optimal cause thermal agitation which disrupts bonds, pH changes alter H+ and OH- concentrations also disrupting bonds</li>
                    <li>Sometimes denaturing is reversible, sometimes not</li>
                </ul>
                <p style="font-size:12.5px;color:var(--ink3);margin:8px 0 10px;">Levels of structure:</p>
                <div class="note-grid-2">
                    <div class="note-card-muted">
                        <p class="note-card-title">1° Primary</p>
                        <p style="margin:0;font-size:12.5px;">Linear sequence of amino acids linked by peptide bonds (all proteins have this).</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">2° Secondary</p>
                        <p style="margin:0;font-size:12.5px;">α-helices &amp; β-pleated sheets via H-bonding along backbone; R-groups don't contribute. Most proteins have up to this level.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">3° Tertiary</p>
                        <p style="margin:0;font-size:12.5px;">3D shape from R-group interactions: VdW, hydrophobic/hydrophilic, H-bonds, ionic, disulfide bridges. Within one chain.</p>
                    </div>
                    <div class="note-card-muted">
                        <p class="note-card-title">4° Quaternary</p>
                        <p style="margin:0;font-size:12.5px;">2+ folded chains interacting. Ex: hemoglobin, insulin.</p>
                    </div>
                </div>

                <h3>Nucleic acids</h3>
                <ul>
                    <li>CHONP</li>
                    <li>Monomer: nucleotides made up of a phosphate group PO4^3-, a 5 carbon sugar, and a nitrogenous base</li>
                    <li>Backbone: phosphate and sugar, Rungs: bases (purines/double-rings adenine&guanine, pyramidines/single-rings cytosine&thymine&uracil)</li>
                    <li><em>Pure as gold</em></li>
                    <li>Phosphodiester covalent bond linkage links backbones (sugar/phosphates) together</li>
                    <li>Hydrogen bonding links nitrogenous bases together in DNA (A makes 2 bonds with T, G makes 3 bonds with C)</li>
                    <li><em>AT Garden City</em></li>
                    <li><strong>DNA (Deoxyribonucleic Acid)</strong>
                        <ul>
                            <li>Polymer of nucleotides, stores genetic info and instructions for making proteins, inherited by offspring</li>
                            <li>Structure: double stranded helix with antiparallel complementary (A-T:G-C) strands</li>
                            <li>One strand runs 5' to 3', the other runs 3' to 5'</li>
                            <li>DNA is only built 5' to 3' with nucleotides added to 3' end</li>
                            <li>DNA is very stable and long-lasting</li>
                        </ul>
                    </li>
                    <li><strong>RNA (Ribonucleic Acid)</strong>
                        <ul>
                            <li>mRNA (messenger RNA) - carries message of genetic code from DNA to ribosomes for protein production</li>
                            <li>tRNA (transfer RNA) - translate/transfer mRNA into proteins by bringing amino acids to the ribosome</li>
                            <li>rRNA (ribosomal RNA) - part of ribosome structure working as an enzyme to form peptide bonds between amino acids during protein synthesis</li>
                            <li>Single stranded structure usually, A pairs w/ U instead of T</li>
                            <li>Less stable and degrades faster than DNA quickly after use</li>
                        </ul>
                    </li>
                    <li><strong>ATP (Adenosine Triphosphate)</strong>
                        <ul>
                            <li>Not a polymer</li>
                            <li>Structure: Adenine bonded to 5-carbon ribose bonded to triphosphate chain</li>
                            <li>Unstable b/c 3 phosphates repel each other</li>
                            <li>Primary energy currency — active transport, cell division, etc.</li>
                            <li><strong>ATP hydrolysis</strong> — terminal phosphate removed; releases energy; often couples to endergonic reactions</li>
                            <li><em>BARF: break absorb, release form</em></li>
                            <li>Bonds between phosphates break easily; bonds forming between water and phosphate are more stable → energy output</li>
                        </ul>
                    </li>
                </ul>
                `
            },
            "Unit 2: Cells": {
                tags: ["cell structure", "cell organelles", "prokaryotes", "eukaryotes", "plasma membrane", "transport", "osmosis"],
                content: `
                    <h2 id="h-u2-ch4">Chapter 4: Cell Structure &amp; Function</h2>
                    <h3>Prokaryotes</h3>
                    <ul>
                        <li>Single-celled organisms, lack a membrane bound nucleus with much smaller/simpler cells</li>
                        <li>Ex: Bacteria & Archaea (live in extreme habitats). Despite them both being prokaryotes structurally, archaea are more biochemically similar to eukaryotes</li>
                    </ul>
                    <div class="graph-grid">
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Plasma Membrane</p>
                            <p style="margin:0;font-size:12.5px;">Innermost layer with a lipid bilayer in bacteria or lipid monolayer in archaea with embedded/peripheral proteins and internal pouches calles MESOSOMES to increase SA:V ratio</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Cell Wall</p>
                            <p style="margin:0;font-size:12.5px;">Middle layer which maintains the shape of the cell strengthened by materials peptitoglycan in bacteria or glycoproteins in archaea. Fungi cell wall made of chitin, plant cell wall made of cellulose, animal/proteins have no cell wall</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Glycocalyx</p>
                            <p style="margin:0;font-size:12.5px;">Outer layer which is a gellike, bumpy layer of polysaccharides lying on outside of cell wall. If it's compact its called a capsule, and if diffuse called a slime layer.</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Cytoplasm</p>
                            <p style="margin:0;font-size:12.5px;">Semifluid solution bounded by plasma membrane containing water, inorganic molecules, organic molecules like enzymes/proteins, NUCLEOID which is a non-membrane bound region that contains plasmid and ribosomes</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Plasmid</p>
                            <p style="margin:0;font-size:12.5px;">Single coiled circular ring of DNA</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Ribosome</p>
                            <p style="margin:0;font-size:12.5px;">Protein chefs / site of protein synthesis</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Flagella</p>
                            <p style="margin:0;font-size:12.5px;">Provide motility, found in prokaryotes but the only exception to this is animal sperm cells which use flagella for movement</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Fimbriae</p>
                            <p style="margin:0;font-size:12.5px;">Small bristle-like fibers that sprout from the cell surface and help bacteria attach to surfaces when necessary ("sticky")</p>
                        </div>
                        <div class="note-card-muted graph-cell">
                            <p class="note-card-title">Conjugation Pili / Sex Pili</p>
                            <p style="margin:0;font-size:12.5px;">Rigid tubular structures used to pass DNA from one bacteria cell to another, bacteria reproduce asexually (less variety) but sex pili allows for horizontal gene transfer leading to bacteria variety</p>
                        </div>
                    </div>

                    <h3>Eukaryotes</h3>
                    <ul>
                        <li>Single or multicellular organisms with membrane bound nucleus/organelles allowing for COMPARTMENTALIZATION and larger cells</li>
                        <li><strong>Compartmentalization</strong>: makes eukaryotic cells more efficient, organized, and capable of performing many complex functions at once and creates distinct pH microenvironments</li>
                        <li>Internal membranes increase surface area</li>
                        <li>Ex: Animals, plants, fungi (yeast is single-celled, mushrooms are multicellular), protists (unicellular aquatic amoeba, paramecium, & euglena)</li>
                        <li>Largest human cell is female egg cell, largest known single cell is an ostrich egg</li>
                        <li>Arose after prokaryotic cells</li>
                        <li><strong>Endosymbiotic Theory</strong>: theory about how organelles in eukaryotic cells evolved, suggesting prokaryotes had plasma membranes fold inwards and evenually folds pinched off, creating compartments
                            <ul>
                                <li>One housed DNA forming the first nucleus which was advantageous in protecting and organizing genetic information</li>
                                <li>Energy-producing organelles like mitochondria and chloroplasts evolved when larger prokaryotes engulfed smaller ones capable of aerobic cell repiration and photosynthesis</li>
                                <li>Evidence: protein arrangement of membrane bound organelles is inverted compared to plasma membrane, mitochondria/chloroplasts/prokaryotic bacteria have their own circular DNA & ribosomes, have structurally very similar double membranes, and reproduce the same way (through binary fission)</li>
                            </ul>
                        </li>
                    </ul>

                        <div class="callout" style="margin:14px 0;">
                            <p style="margin:0 0 8px;font-weight:500;color:var(--purple-xl);">ENDOMEMBRANE SYSTEM</p>
                            <p style="margin:0;">Series of intracellular membranes that compartmentalize cell and allows cell to do incompatible functions at once. Organelles of the endomembrane system are interrelated either through physical contact or transport vesicles (includes: nuclear envelope/membrane, ribosomes, rough/smooth ER membranes, golgi, vesicles, lysosomes)</p>
                            <p style="margin:8px 0 0;">Organelles work together to modify, package, and transport polysaccharides, lipids, and proteins both intra and intercellularly</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Nucleus</p>
                            <p>Only found in eukaryotes, the command center of the cell, usually found near the center and seperated from the cytoplasm by the NUCLEAR MEMBRANE (double membrane continuous with the rough ER, containing protein channels/pores which allow for transport and permit exchange between the nucleoplasm/cytoplasm). Contains CHROMATIN (unraveled DNA made up of DNA and proteins which condesnses to form chromosomes just before cell division) in a semi-fluid nucleoplasma and NUCLEOLUS</p>
                            <p>Functions: controls all cellular activities, houses the DNA and nucleolus, site of DNA replication and transcription (DNA->mRNA) and post-transcriptional RNA modification</p>    
                            <p>NUCLEOLUS: region, not a organelle/structure. Found within the nucelus, it is a non-membrane bound, dark/dense region of the nucleus where ribosome/protein & rRNA synthesis happens (rRNA joins with proteins to form ribosome subunits). Evidence: removing nucleoli slowed cell's rate of protein synthesis</p>  
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Ribosomes</p>
                            <p>The site of protein synthesis composed of rRNA and proteins and a large/small subunit. Made in the nucleolus.</p>
                            <p>ATTACHED RIBOSOMES - found on the rough ER and make proteins destined for export out of the cell / embedded in cell membrane</p>
                            <p>FREE RIBOSOMES - float freely in cytoplasm either alone or in groups called polyribosomes, make proteins for use inside the cell</p>
                            <p>Some cells like pancreatic cells have more ribosomes since they produce secretions that contain insulin which is a protein hormone</p>
                            <p>A ribosome attaches to ER if the protein being synthesized begins w sequence of aminoacids called a SIGNAL PEPTIDE, which then binds to SIGNAL RECOGNITION PARTICLE (SRP) in the cytoplasm which binds to a SRP RECEPTOR PROTEIN on the ER, opneing a channel which causes SRP to leae & protein synthesis resumes and polypeptide fed into the ER. An enzyme inside ER removes signal peptide from the growing polypeptide chain and once complete, large/small ribosomal subunits break away from ER/each other and polypeptide folds into a protein within ER, and once complete the ER membrane forms a vesicle and transports it to the golgi</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">ROUGH Endoplasmic Reticulum</p>
                            <p>A system of membrane channels/saccules continous w nuclear membrane</p>
                            <p>Studded with attached ribosomes on cytoplasmic side since it has receptor sites for ribosomes</p>
                            <p>Functions: Protein synthesis aand transport (proteins usually excreted out of cell as secretions for use elsewhere), some protein modification/processing begins here (like adding sugar/carbohydrates to protein forming glycoproteins), form transport vesicles to transport products to golgi for further packaging</p>
                            <p>Plasma and pancreatic cells have more rough ER since they produce secretions like hormones and enzymes which are proteins</p>    
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">SMOOTH Endoplasmic Reticulum</p>
                            <p>Continous system of membrane channels with rough ER but with no ribosomes/receptor sites</p>
                            <p>Functions: Lipid synthesis, detoxification of drugs/poisons, carbohydrate metabolism, forms transport vesicles to transport to golgi/rough ER, stores CA2+ ions in muscle cells</p>
                            <p>Liver and testes cells have more smooth ER since liver detoxifies blood and testes produce steroid hormones which are lipids</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Golgi Apparatus / Golgi Bodies / Golgi Complex</p>
                            <p>Consists of flatted curved saccules resembling stack of hollow pancakes</p>
                            <p>Main function: further modify/package protein/lipid products from vesciles from the ER recieved on the cis/inner face, chemical modification like glyocosylation which is when sugar/molecules added to form glycoproteins/glycolipids/etc which directs product to wherever it needs to go next, then is prepared for shipment/packages into new transport vesicles from its trans/outer face</p>
                            <p>Packaged vesicles either fuse w/ cell membrane and are secreted (secretion exocytosis for export out of the cell) or sometimes fo to other cell location</p>
                            <p>Golgi is also responsible for lysosome formation</p>
                        </div>
                        <div class="note-card-muted" style="margin-bottom:12px;">
                            <p class="note-card-title">Lysosomes</p>
                            <p>Membrane-bound vesicles produced by golgi appartus found ONLY IN ANIMAL CELLS</p>
                            <p>Contains digestive hydrolitic enxymes & is highly acidic enabling digestion of certain cell materials, breakdown of proteins, lipids, nucleic acids, carbs, destroying of pathogens like bacteria/viruses, recycling of old/damaged cell parts</p>
                            <p>Plays a role in programmed cell death (APOPTOSIS)</p>
                            <p>White blood cells have high lysosome abundance since they engulf invading pathogens</p>
                            <p>Tay-Sachs Disease - genetic lyosomal storage disease caused by absence of lipid digestion lysosomal enzyme causing lipid brain accumulation and nerve cells die so nervous system deteriorates and usually only lives to 3-4yo.</p>
                        </div>
                    <p style="margin:20px 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Energy related organelles</p>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">Chloroplasts</p>
                            <p>Specialized organelles found in ONLY plants / photosynthetic algae</p>
                            <p>Structure: double outer and inner membrane enclosing semi-fluid stroma, contains thylakoid discs stacked in grana stacks which are green b/c of chlorophyll pigment. Contains its own DNA&ribosomes and self-replicates</p>
                            <p>Function: site of photosynthesis (CO2+H2O+solar energy -> C6H12O6 + O2 general equation), evolved from ancient prokaryotic photosynthetic cyanobacteria that were later engulfed by larger prokaryote (endosymbiosis)</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Mitochondria</p>
                            <p>Specialized organelles found in all aerobic eukaryotic cell which is the site of some reactions involved in aerobic cell respiration</p>
                            <p>Structure: double membrane w/ smooth outer membrane and highly folded inner cristsr membrane enclosing semi-fluid matrix, the folds allow for production/dispersion of a lot of ATP. Contains its own DNA & ribosomes and can self-replicate</p>
                            <p>Muscle cells, nerve cells and any cells w cilia or flagella have high mitochondria abundance since they require a lot of energy</p>
                        </div>
                    </div>
                    <p style="margin:20px 0 10px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Other eukaryotic organelles</p>
                    <div class="note-grid-2">
                        <div class="note-card-muted">
                            <p class="note-card-title">Vacuoles</p>
                            <p>Membrane bound sac that have many different roles (mostly storage)</p>
                            <p>Plants: have single large central vacuole that takes up most of cell volume, stores water/nutrients/pigments/waste, breaks down macromolecules/damaged cell parts w/ hydrolytic enzymes (like how lysosomes do for animals), and aids in H2O retention to maintain turgor pressure (internal pressure buildup as water moves into cell by osmosis causing cell to stay firm and structured when vacuole pushes against cell membrane/wall - turgid is swell, flaccid is shrink)</p>
                            <p>Animals: smaller more abundant vacuoles that store cellular materials</p>
                            <p>Protists (ex: paramecium): specialized contractile vacuoles that maintain water balance in some freshwater organisms by collecting/pumping excess water that enters via osmosis to prevent bursting</p> 
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Peroxisomes</p>
                            <p>Membrane bound vesicle that encloses digestive hydrolytic enzymes, similar to lysosomes in structure and function but lysosomes have broader digestive function</p>
                            <p>Specific digestive function: breakdown fatty acids and alcohols but this results in hydrogen peroxide production which is toxis, so enzyme catalose in peroxisomes break down to water&oxygen in catalase reaction (2H2O2 --> 2H2O + O2)</p>
                            <p>Liver cells high in peroxisomes</p>
                        </div>
                    </div>
                        <div class="note-card-muted" style="margin-top:12px;">
                            <p class="note-card-title">Cytoplasm</p>
                            <p>Cytosol - matrix made of mostly water w dissolved particles, contains the cytoskeleton</p>
                            <p>Cytoskeleton - cell's infrastructure which maintains cell shape, anchors organelles, assists in movement, directs transport, consisting of a web of protein fibers that move enabling cytoskeleton function</p>
                            <p>CYTOSKELETON COMPONENTS / PROTEIN FIBERS:</p>
                            <ul>
                                <li>Microfilaments / Actin Filaments (smallest): made of actin protein, maintains cell shape, works w myosin motor molecule to enable muscle contractions, aids in cytokinesis, aids in formation of pseudopod false feet helping amoeba move/feed, aids in shortening/extending of microvili in small intestine for nutrient absorption, helps move materials around within cell/cytoplasm through cytoplasmic streaming</li>
                                <li>Intermediate Filaments: made of keratin protein, also helps reinforce cell shape and holds organelles in place</li>
                                <li>Microtubules (largest): made of tubulin protein, enables vesicle movement outward by working with kinesin motor molecule, and vescile movement inwards working with dynein motor molecule, important components of cilia, flagella, basal bodies, centrioles, spindle fibers which all have varied functions</li>
                            </ul>
                            <p>MICROTUBULE STRUCTURES</p>
                            <ul>
                                <li>CILIA: short, numerous hairlike projections from cell surface moving in wavelike motion w/ help of dynein motor molecules. Cross section is 9+2 w/ 2 microtubules in middle and 9 around it. Only in some specialized cells! Function: aids in cell movement/locomotion like in aquatic paramecium, and helps move material along cell membrane like moving mucus-debris in tracheal cells and move egg in fallopian tubes</li>
                                <li>FLAGELLA: long, usually singled or coupled projection from cell surface moving in whip-like motion w. 9+2 microtubule arrangement. Only in some specialized cells! EX: sperm cells flagella used to swim towards egg in fallopian tube, some protists like euglena use to move through water, some bacteria use to move toward/away from taxis/harmful substances</li>
                                <li>BASAL BODIES: 9 triplet arrangement of microtubules all around, forms the base of cilia and flagella anchoring them to the cell</li>    
                                <li>CENTRIOLES: (ANIMAL CELLS ONLY): 9 triplet arrangement of microtubules, determines plane of division where animal cell must divide (plant cells cell plates does the same thing). Centrosomes are group of 2 centrioles</li>
                                <li>SPINDLE FIBERS: 9 triplet arrangement of microtubules which attach to chromosomes to seperate and move them to poles before cell division</li>    
                            </ul>
                            <p>MOTOR PROTEINS: uses ATP hydrolysis energy to work w protein fibers and enable cytoskeleton</p>
                            <div class="note-grid-3" style="margin-top:8px;">
                                <div class="note-card" style="padding:10px;">
                                    <p style="margin:0;font-size:12px;"><strong>MYOSIN</strong> — helps move actin filaments to enable muscle contractions</p>
                                </div>
                                <div class="note-card" style="padding:10px;">
                                    <p style="margin:0;font-size:12px;"><strong>KINESIN</strong> — moves along microtubules to aid in vesicle movement OUTWARD</p>
                                </div>
                                <div class="note-card" style="padding:10px;">
                                    <p style="margin:0;font-size:12px;"><strong>DYNEIN</strong> — moves along microtubules to aid in vesicle movement INWARD, helps microtubules making up cilia and flagella move</p>
                                </div>
                            </div>
                        </div>

                    <h3>CELL SIZE & SURFACE AREA:VOLUME RATIO</h3>
                    <ul>
                        <li>Since cells come in all different sizes, larger SA:V ratios allows for efficient exchange of materials (getting rid of waste/energy and taking in materials)</li>
                        <li>Volume grows faster than surface area as a cell gets bigger so SA:V ratio decreases so smaller cells are more ideal for materials exchange</li>
                        <li>Larger organisms have lower SA:V ratios so lose heat slower and don't need to burn as much energy, so they don't produce heat as fast and have a slower metabolism (ex: when its cold you will make yourself smaller to prevent energy transfer/loss)</li>
                        <li>Adaptations increasing SA: projections in the small intestine, folds like cristae in mitochondria, folds called mesosomes in bacteria, roots of plants, flat thin leaves in plants, flappy elephant ears</li>
                    </ul>

                    <h2 id="h-u2-ch5a">Chapter 5A: Membrane Structure &amp; Function</h2>
                    <h3>PLASMA MEMBRANE</h3>
                    <ul>
                        <li>Common to all cells seperating internal cytoplasm from external cell environment</li>
                        <li>Functions: regulates passage of materials in/out of cell through the selectively permeable lipid byilater, controls cell shape/fluidity through the cholesterol/unsaturated fatty acids in membrane, recongizes/communicates w other cells/molecules thorugh specificity and membrane proteins/carbs, and anchors the cytoskeleton for stability</li>
                        <li>Structure: Fluid mosaic model w/ phospholipid bilayer, protein molecules, carb/sugar chains, and cholesterol
                            <ul>
                                <li>Phospholipid bilayer: made up of phosphate + R group + 1 glycerol + 2 fatty acids, external/cytoplasmic surfaces lined w polar heads and nonpolar tails in between facing inwards</li>
                                <li>Protein Molecules: Float around, can be hydrophillic/hydrophobic depending on the side group charge/polarity. PERIPHERAL proteins are found on the inner membrane surface, and are sometimes enzymes facilitating rxns, ex: G proteins & cytochrome C. INTEGRAL/TRANSMEMBRANE proteins are partially/entirely embedded and generally transport materials and act as molecular receptors to bind to signalling molecules
                                    <ul>
                                        <li>Channel Proteins: integral proteins allowing passage of partiucular molecules/ions thorugh protein membrane channel (cystic fibrosis caused by faulty chloride channel)</li>
                                        <li>Carrier Proteins: integral proteins combining w substance to be transported and changing theior shape selectively which helps it pass membrane</li>
                                        <li>Cell Recognition Proteins: integral glycoproteins helping body recognize foreign substances (ex: organ transplant rejection, antigens, white blood cells attack foreign glycoproteins)</li>
                                        <li>Receptor Proteins: integral proteins binding w specific molecules and allowing cell to respond to signals from other cells (ex: type 2 diabetes cell protein receptor don't bind properly to insulin so they store glucose as glycogen)</li>    
                                        <li>Enzymatic Proteins: carry out metabolic reactions directiy by catalyzing</li>
                                        <li>Junction Proteins: attach adjacent cells & allow signal molecules to pass between cells</li>    
                                    </ul>
                                </li>
                                <li>Carbohydrate (Sugar) Chains: chains existing only on outside of plasma membrane making it asymmetrical, cruical to cell-cell recognition often attaching to lipids/proteins creating glycolipids/glycoproteins.</li>
                                <li>Cholesterol: modify membrane fluidity over temperatures & maintain its own homeostasis, Li+ reduces flexibility at higher temps and at really low temps it prevents membrane freezing</li>
                            </ul>
                        </li>
                        <li>Selectively permeable: some substances can pass, but others can't bc can't get past hydrophobic tails (ex: small nonpolar molecules like gases and hydrocarbons easily pass; ions/charged particles & polar/ionic compounds can't easily pass but w/ protein assistance can. large molecules can't pass</li>
                    </ul>
                    
                    <h3>Passive Transport</h3>
                    <p>Import resources & export waste without using energy</p>
                    <div class="note-grid-3">
                        <div class="note-card-muted">
                            <p class="note-card-title">Passive Diffusion</p>
                            <p style="margin:0;font-size:12.5px;">Net movement of molecules from high -> low concentration down/with concentration gradient (difference in concentrations) until dynamic equilibrium (no net movement, = in both directions) reached and gradient no longer exists w/o using energy</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Diffusion rate affected by temperature (increases w higher temp bc more molecule movement/kinetic energy), molecule size/mass (smaller molecules move faster so diffuse faster), steepness of concentration gradient (steeper gradient = faster diffusion rate bc think going down a slide), surface area (greater SA = faster diffusion rate bc more membrane space)</p>    
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Osmosis</p>
                            <p style="margin:0;font-size:12.5px;">Diffusion of water across selectively permeable membrane from high water concentration to low water contentation (direction determined by relative solute concentrations)</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Focuses on solvent/water movement instead of solute since the solute may not be able to diffuse due to size/charge/polarity (nonpenetrating solutes)</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Placing an movable lever makes osmosis/water push the level up, but if immovable lever placed the level would counteract water pressue equally and opposite like how cell wall acts for plants</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">OSMOTIC (HYDROSTATIC) PRESSURE - min pressure needed to stop osmosis, aka turgor pressure in plant cells but plants won't burst bc cell wall resists water movement after a point</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Facilitated Transport / Facilitated Diffusion</p>
                            <p style="margin:0;font-size:12.5px;">Net movement of molecules like ions/polar molecules that can't go directly through membrane from high to low concentration with the help of channel/carrier proteins creating channels/binding to the molecule which are specific to type of molecule/ion. No energy required</p>
                        </div>
                    </div>
                    
                    <h3>Types of Solutions</h3>
                    <p><strong>TONICITY</strong> - relative solute concentration of nonpenetrating solutes that don't cross membrane</p>
                    <p><strong>OSMOLARITY</strong> - relative solute concentration of penterating and nonpenetrating (ALL) solutes</p>
                    <p>Water always moves from <em>HYPO TO HYPER</em> asusuming no negative/applied pressures</p>
                    <p>Human blood / intracellular fluid is isotonic to our bodycells, but for some animals/protists like paramecium in freshwater environments isn't isotonic so they require regulatory mechanisms like contractile vacuoles pumping out excess water to prevent bursting/buildup and help keep homeostasis</p>
                    <div class="note-grid-3">
                        <div class="note-card">
                            <p class="note-card-title">Isotonic Solutions</p>
                            <p style="margin:0;font-size:12.5px;">When both solute concentratons and water concentrations are equal, so no net movement and water crosses at same rate in both directions</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Cell placed in isotonic solution won't shrink or swell)</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Hypotonic Solution</p>
                            <p style="margin:0;font-size:12.5px;">(Low solute high H2O) Solute concentration in solution is lower than solution on other side so hypotonic solution has higher water concentration compared to other side of membrane</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Cell placed in hypotonic solution would expand since water moves in (animal cells could burst/lyse, but plant cell walls resist bursting)</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">Hypertonic Solution</p>
                            <p style="margin:0;font-size:12.5px;">(High solute low H2O) Solute concentration in solution is higher than solution on otherside so hypertonic solution has lower water concentration compared to other side of membrame</p>
                            <p style="margin:8px 0 0;font-size:12.5px;">Cell placed in hypotonic solution would shrink (animal cells crenate, plant cells plasmolyze where cell membrane pulls away from cell wall which stays rigid)</p>
                        </div>
                    </div>
                    
                    <h3>Water Potential (PSI)</h3>
                    <p>Measures relative tendency for water to leave region, measured in units of pressure called bars/megapascals (MPa) --> 1MPa=10bars</p>
                    <p>Higher water potential means higher tendency for water to move from/leave an area which helps us figure out where water will flow</p>
                    <p>Water always moves from <em>high water pontential to low water potential until water potentials are equal with no net movement (so technically movement can't be based only on solute concentrations)</em></p>
                    <p>Water potential depends on SOLUTE POTENTIAL (PSI S) and PRESSURE POTENTIAL (PSI P) so PSI = PSI S + PSI P</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Solute potential / osmotic potential</p>
                            <ul style="margin:0;">
                                <li>Potential for water to move solely based on solute concentrations</li>
                                <li>As solute concentration icncreaes, solute potential decreases since H2O molecules bind to solute and aren't free to do work (ex: pure water has highest solute potential)</li>
                                <li>PSI S = -iCRT (on ref table), where PSI S = solute potential, i=ionization constant which is # of particles the solute makes in water (ex: NaCl makes 2 particles -> Na+ and Cl-, CaCl2 makes 3 particles -> Ca2+ Cl- and Cl-), C=molar concentration (M->mol/L), R=pressure constant (t=0.0831 L*bars/mol*K), T=temperature in Kelvin (C+273)</li>
                            </ul>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Pressure potential</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>PRESSURE POTENTIAL:</strong>physical pressure on or away from a solution</p>
                            <ul style="margin:0;">
                                <li>Physical pressure on or away from a solution, tendency of water to move in response to pressure (ex: turgor pressure)</li>
                                <li>Pressure potential is negative in transpiration in xylem of plant since this draws water towards the region</li>
                                <li>Pressure potential is positive if cell wall exterts pressure to counter any buildup of pressure inside plant cell due to osmosis inward</li>
                                <li>In most AP bio problems, pressure potential is 0 since its in an open container that exists at atmospheric pressure in animal cells</li>
                                <li>So water movement can be based solely on relative solute concentration if pressure potential =0, but overall water potential is a better measure of net movement than solute concentration in case pressure potential isn't 0</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Active Transport & etc</h3>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">Active Transport</p>
                            <p>Net movement from low to high concentration up and against concentration gradient requiring energy (ATP) and transmembrane protein pumps</p>
                            <p>Important for cell to maintain particular concentrations of substance despite environmental concentrations</p>
                            <p><strong>EX: Sodium-Potassium Pump</strong></p>
                                <ul>
                                    <li>Present in all cells especially muscle/nerve cells to create concentration&voltage gradient needed to drive procveses like impulse travel across neuron</li>
                                    <li>Takes up 1/3 of bodies' energy since Na+/K+ pump works hard to pump 3Na+ out and 2K+ in to maintain levels</li>
                                    <li>3Na+ ions in cytoplasms move to carrier protein, ATP phosphorylates carrier protein releasing energy and changing its shape so 3Na+ ions get released out of cell, protein's changed shape increases affinity for K+ so 2K+ move into carrier protein, protein is dephosphorylized and 2K+ ions released into cell (ADP+P->ATP)</li>
                                </ul>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Bulk Active Transport</p>
                            <p>Transport of large macromolecules like proteins, polysacchardies, nucleic acids into/out of cell</p>
                            <p>Requires vesicle formation and energy</p>
                            <p>EXOCYTOSIS: (exit) internal vesicles made by golgi fuse with plasma membrane to secrete macromolecules out of cell (ex: insulin hormone released by pancreatic cells, growth hormone release by pituitary cels, neurotransmitters by neurons)</p>
                            <p>ENDOCYTOSIS: (enter) cells take in large macromolecules by forming new vesicles from membrane</p>
                            <ul>
                                <li>PHAGOCYTOSIS: "cell eating" cell engulfs large solid material in (ex: foreign particles/pathogens or old red blood cells engulfed by white blood cells)</li>
                                <li>PINOCYTOSIS: "cell drinking" cell takes in small particles/liquid (ex: small substances ingested by blood,kidney,intestinal,andplant root cells)</li>
                                <li>RECEPTOR-MEDIATED ENDOCYTOSIS: form of pinocytosis specific bc it uses receptor proteins to recognize ligands and bring them to cell (ex: fetal blood cells taking in substasnces from maternal blood cells at placenta, body cells take up low-density lipoproteins to help transport cholestrol in blood when they gather near specific receptor sites)</li>
                            </ul>
                        </div>
                    </div>

                    <h3>Cell Junctions</h3>
                    <p>In plant/animal cells, adjacent cells form junctions to behave/coordinate</p>
                    <div class="note-grid-3">
                        <div class="note-card-muted">
                            <p class="note-card-title">Gap junctions</p>
                            <p style="margin:0;font-size:12.5px;">GAP JUNCTIONS - found between animal cells allowing cell-cell communication. Membrane channel proteins join cells together giving cell strength and allowing small molecules/ions to pass. (ex: important in heart muscle/smooth muscle tissue bc allow migration of ions between cells so cell can contract as a unit)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Plasmodesmata</p>
                            <p style="margin:0;font-size:12.5px;">PLASMODESMATA - membrane-like channels connecting one plant cell to the next, allowing water/small molecules to pass from cell to cell, similar to gap junctions in animal cells but plasmodesmata are lined by cell membrane unlike gap junctions</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cell wall</p>
                            <p style="margin:0;font-size:12.5px;">CELL WALL - surrounds plasma membrane in plants, porous and permeable, provides support/rigidty, resists excessive water uptake through counter turgor pressure, made of cellulose in plants, peptidoglycan in bacteria, protein/carbohydrate complex in archea, chitin in fungi, not found in animals</p>
                        </div>
                    </div>
                    `  
            },
            "Unit 3: Cellular Energetics": {
                tags: ["metabolism", "energy", "enzymes", "photosynthesis", "cell respiration"],
                content: `
                    <h2 id="h-u3-ch6">Chapter 6: Metabolism: Energy & Enzymes</h2>
                    <h3>ENERGY: the ability to do work & bring change</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">The ability to do work and bring change.All living systems require energy input to survive & carry out life functions</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Initial energy source from the Sun either used directly by producers or indirectly through consumption by consumers (Sun->producer->consumer)</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Flows in one direction through food chain/webs(does NOT CYCLE), energy is converted into different forms, some energy used to do work and perform life processes but most escapes into environment as heat</p>
                        <p style="margin:0;font-size:12.5px;">Ex: solar energy (light energy carried by photos of light from the sun), kinetic energy (energy of motion associated w moving objects like balls, electrons/molecules), potential energy (stored energy whose capacity to do work is not used, chemical energy of bonds/molecules/gradients, and food), thermal/heat energy (unusable form of energy in biological systems that can't be used to do cellular work)</p>
                    </div>

                    <h3>Laws of Thermodynamics</h3>
                    <p>The study of energy transformations that occur in matter</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">First Law of Thermodynamics (Law of Conservation of Energy)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy can't be created/destroyed but instead transferred from one form to another</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ex: ball at top of hill has potential E that turns into kinetic E when released/falling, chloroplasts in plant cells capture light E and transform it into chemical E stored in glucose during photosynthesis</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ex: Cotransport - during active transport of H+, ATP helps move H+ ions against concentration gradient storing them on one side of membrane. during cotransport of sucrose, kinetic E of moving H+ down concentration gradient provides energy to actively transport sucrose against gradient which is then converted to PE at sucrose stored in higher concentration side plant cell</p>
                            <p style="margin:0;font-size:12.5px;">Ex: ATP power motor proteins (kinesin, dynein, myosin) to enable vesicle movement (chemical -> kinetic)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Second Law of Thermodynamics (Law of Entropy)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">ENTROPY: meeasure of randomness/disorder in a system</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy transfer is not 100% efficient, for every energy transfer that occurs the entropy in universe increases and some energy is lost as heat to surroundings and can no longer be used to do work</p>
                            <p style="margin:0;font-size:12.5px;">Nature tends to increase in entropy but life requires systems to be organized so constant input of energy is needed to keep order/homeostasis</p>
                        </div>
                    </div>

                    <h3>Metabolic Reations / Energy Transformations</h3>
                    <p>Many reaction in biological systems involve energy changes</p>
                    <p><strong>Gibbs Free Energy (G)</strong>: amount of available energy capable of doing work</p>
                    <p><strong>Free-Energy Change of a rxn (delta G)</strong>: tells whehter or not reaction occurs spontaneously</p>
                    <p><strong>Spontaneous RXN</strong>: reaction that occurs by itself w/o energy input (exergonic)</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Endergonic Reactions</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy is absorbed/needed since products have more free energy than reactants</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">A+B+energy->C so delta G is positive and the reation is not spontaneuous</p>
                            <p style="margin:0;font-size:12.5px;">Gibbs free energy chart goes from less energy reactants to more energy products w/ activation energy (Ea) bump in between</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Exergonic Reactions</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Energy is released bc products have less free energy than reactants</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">A+B->C+energy so delta G is negative and the reaction is spontaneous</p>
                            <p style="margin:0;font-size:12.5px;">Gibbs free energy chart goes from more energy reactants, activation energy (Ea) bump, and less energy products</p>
                        </div>
                    </div>

                    <h3>ATP: Adenosine TriPhosphate</h3>
                    <ul>
                        <li>Energy currency for cells since it is the most accessible form of cell energy bc its unstable phosphate bonds hydrolyze easily, releasing enough usable energy to power cell processes.</li>
                        <li>ATP hydrolysis releases energy b/c bonds between negatively charged phosphates are unstable and break easily, bonds forming between water/phosphates are more stable resulting in more energy output and little input</li>
                        <li>ATP hydrolysis often coupled w energy-requiring rxns, allowing them to proceed to maintain order/life since it released 7.3kcal/mol of energy, making coupled rxns involving ATP overall exergonic/spontaneous</li>
                        <li>Cells couple ATP hydrolysis to energy-requiring rxns by adding a phosphate to make molecules higher in free energy/more reactive which changes shape of proteins so they can do work, and by helping build gradients that store potential energy</li> 
                        <li><strong>ATP Syntehesis/Phosphorylation of ADP</strong>: ADP+P+energy->ATP+H2O, nonspontaneous +deltaG endergonic rxn that requires energy</li>    
                        <li><strong>ATP Hydrolysis</strong>: ATP+H2O->ADP+P+energy, spontaneous -deltaG exergonic rxn that releases energy</li>
                        <li>ATP has higher potential energy than ADP and is less stable</li>
                        <li>Cell Resipiration (exergonic process): energy to build ATP coming from energy in food which is broken down to release energy & build ATP</li>
                    </ul>

                    <h3>Enzymes</h3>
                    <ul>
                        <li>All metabolic chemical reactions need enzymes/catalysts which are proteins speeding up chemical rxn rates without changing itself by lowering activation energy, can be used repeatedly</li>
                        <li>Ribosomes: enzymes made of RNA instead of protein which helps w RNA/protein synthesis</li>
                        <li>Reactions are not random but organized into steps called a METABOLIC PATHWAY which starts w reactant, then intermediates, then end product</li>
                        <li><strong>Activation Enzyme (Ea):</strong> the energy needed to start rxn and cause molecules to react w each other</li>
                        <li><strong>Enzyme-Substrate Complex:</strong> reactants called substrates, enzymes are specific to substrates and often named substrate-ase. General reaction is enzyme+substrate->enzyme-substrate complex->product(s)</li>
                        <li><strong>Active Site</strong>: the part of the enzyme that interacts/binds w substrate & site where chemical change is occuring, shape is complementary to substrate shape but through induced fit model it undergoes a slight shape change</li>
                        <li>Enzymes may carry out degradation (when single substrate is broken down into more than one smaller products involved in catabolic pathway), or synthesis (when smaller subtrates combine to produce a larger product involved in anabolic pathway)</li>
                        <li>Some enzymes need helpers called cofactors if inorganic nonproteins (ex: metal minerals ions like Fe, Zn, Mg, Cu) and coenzymes if organic nonproteins (ex: vitamins)</li>
                        <li>Enzyme activity is affected by: inhibitors are moecules binding to enzymes decreasing activity (sometimes necessary-feedback inihibition which is reversible)
                            <ul>
                                <li>Higher substrate/enzyme concentration increases enzyme activity bc more frequent collisions (to a limit until all active sites are occupied)</li>
                                <li>Higher temperatures increases enzyme activity bc more frequent collisions but too high temperatures rapidly decrease enzyme activity due to denaturation. On the other hand, low temps don't denature, low temps just slow enzymes down a lot</li>
                                <li>pH above/below optimal alters H+/OH- concentration changing R-group interactions changing shape/folding of enzymes (graph looks like a mountain shape at optimal pH)</li>
                                <li>Inhibitors are molecules that bind to enzymes decreasing activity (sometimes necessary-feedback inhibition which is reversible like antibitoics combatting bacteria like penicilin) but sometimes irreversible like poisons</li>
                                <li>Noncompetitive inhibitors - inhibitor binds to allusteric site (opposite active cite) instead of enzyme's active site, causing enzyme active site to change shape preventing it from binding to substrate</li>
                                <li>Competitive inhibitors - inhibitor binds to active site so inhibitor/substrate compete to bind, product may form if substrate binds but no product will form if inhibitor binds</li>
                            </ul>
                        </li>    
                    </ul> 

                    <h2 id="h-u3-ch7">Chapter 7: Photosynthesis</h2>
                    <h3>Overview</h3>
                    <ul>
                        <li>Process capturing solar energy into ATP/NADH into chemical energy which ends up being stored in carbohydrates through net equation: 6CO2+6H2O+solar energy->C6H12O6+6O2 or overall equation 6CO2+12H2O+solar energy->C6H12O6+6H2O+6O2</li>
                        <li>Located chloroplasts in green portions of plants like leaves which contain mesophyll tissue in which cells are specialized for photosynthesis</li>
                        <li>2 sets of rxns: Light dependent rxns and light independent reactions which produce carbohydrates and release oxygen, since carbohydrates produced are chemical energy source, oxygen released as byproduct used for cell respiration and rsies to form ozone shield protecting earth</li>
                        <li>Photosynthetic organisms/AUTOTROPHS (since they produce their own food and feed heterotroph consumers): plants, green algae/protists, cyanobacteria/prokaryotes</li>
                        <li>Raw materials: water taken up through roots, CO2 taken up through stomata/stoma openings on underside of leaves</li>
                        <li>Chloroplast structure/function: double membrane, semifluid strome interior rich in enzymes aand this is where CO2 reduced to form carbohydrate w help from enzymes, stacks of thylakoids forming a stack called granum/grana containing photosynthetic pigments chlorophylls a&b and others, light absorpiton occurs here</li>
                        <li>Endergonic, anabolic process building glucose requiring light energy, inolving redox reactions (reduction of CO2 to form glucose, oxidation of H2O to form O2) and indirect movement of electrons from water to CO2</li>
                        <li><em>REDOX: reduction-oxidation reactions. LEO says GER - lose electron oxidation, gain electrons reduction</em></li>
                        <li>Solar energy (photon is smallest particle/unit of light) converted to ATP/NADPH which is used to reduce CO2 to glucose w help from enzymes</li>
                        <li>1 H atom = 1e +1proton</li>
                        <li><em>Track electrons, energy, atoms, and H+ throughout photosynthesis</em></li>
                    </ul>

                    <h3>Pigments</h3>
                    <p>Plants adapted to capture some of the radiation associated w visible light. If it reflects a color that means it can't absorb that color well, so plants don't grow well in green light.</p>
                    <div class="note-grid-2">
                        <div class="note-card-muted">
                            <p class="note-card-title">Chlorophyll a</p>
                            <p style="margin:0;font-size:12.5px;">main photosynthetic pigment in green plants, reflects dark green</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Chlorophyll b</p>
                            <p style="margin:0;font-size:12.5px;">plays accessory (not as important) role in photosynthesis in green plants, reflects light green</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Carotenoids</p>
                            <p style="margin:0;font-size:12.5px;">found in most plants but predominant in carrot, pumpkins, and fall months when chlorophyll breaks down for winter, reflects orangish yellow</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Phycobilins</p>
                            <p style="margin:0;font-size:12.5px;">mainly found in red algae (not as important)</p>
                        </div>
                    </div>

                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Light Dependent Reactions (LDR)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Reactions that need light to occur, located along thylakoid membranes, inputs of solar energy, H2O, ADP+P, NADP+ to output O2,ATP,NADPH</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Uses splitting of water, moving electrons energized by solar energy, and formation of H+ gradient to fuel ATP/NADPH production (energy-carrying molecules) with O2 released as a byproduct</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Photosytems 2 (680) and 1 (700) are collections of pigment molecules responsible for gathering solar energy/light photons to eventually be converted to other usable energy forms for plant, consisting of a pigment complex, reaction complex, and electron acceptor molecule</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>PIGMENT COMPLEX consists of pigment molecules which capture light energy photons and transfer it to a pair of chlorophyll a molecules at REACTION CENTER</li>
                                <li>REACTION COMPLEX pair of chlorophyll a molecules accumulate energy from other electron molecules, causing the electrons from double bond in pigment to get excited and jump to higher energy levels</li>
                                <li>Instead of releasing energy back to ground state, the excited electrons are captured by ELECTRON ACCEPTOR MOLECULE which receives electrons from rxn center and passes them to electron transport chain (PS80 rxn center for PS2 and PS700 rxn center for PS1)</li>
                                <li>H2O from environment diffuses into inner thylakoid space and gets split & oxidizes (photolysis) H2O->0.5O2+2e-+2H+ which replenishes electrons lost by chlorophyll A at reaction center. The O2 gets released as waste, and 2H+ stay in inner thylakoid and contribute to building of H+ gradient inside thylakoid</li>
                                <li>High energy electrons from chlorophyll which were energized by light are delivered to ELECTRON TRANSPORT CHAIN (series of membrane-bound protein carrier in thylakoid membrane passing electrons between carriers through redox rxns).</li>
                                <li>Electrons move from caarrier molecule to carrier molecule, releasing energy in the process and are low in energy by the end of the chain</li>
                                <li>Energy released by electron transfer goes towards powering a proton pump (active transport protein pumping H+ from low stroma to high thylakoid space across membrane) which enables production of ATP through CHEMIOSMOSIS aka PHOTOPHOSPHORYLATION in photosynthesis</li>
                                <li>CHEMIOSMOSIS: method of ATP production requiring electron transport chain and electrochemical H+ gradient/difference in concentrations and charge to fuel ATP production through ADP phosphorylation, using released energy from electrons moving along ETC to actively pump H+ across membrane. H+ gradient builds up in innner thlyakoid space and ATP is passively transported through ATP synthase into transport.</li>
                                <li>H+ gradient builds up in innner thlyakoid space so ATP is passively transported through ATP synthase into transport, ATP brought to calvin cycle (ADP+P-->ATP as H+ transported passively).</li>
                                <li>Low energy electrons received by PS1 are re-energized by light in the same way as PS2, but exited electrons are replaced by electrons from ETC not from water</li>
                                <li>Reorganized electrons passed to protein carrier ferredoxin</li>
                                <li>Enzyme called NADP+ reductase passes 2 electrons + 1H+ to NADP+ (final electron acceptor) reducing it to become NADPH in stroma which is brought to calvin cycle (NADP+ is oxidized form empty shuttle, NADPH is reduced form full shuttle carrying 2e+1H in rxn NADP+ + 2e- + 1H+ -> NADPH)</li>
                            </ol>
                            <p style="margin:10px 0 0;font-size:12.5px;">Electron flow is noncyclic and some electrons loop around ETC to make more ATP since more ATP needed than NADPH</p>
                        </div>

                        <div class="note-card-muted">
                            <p class="note-card-title">Light Independent Reactions (LIR) / aka Calvin Cycle</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Reactions don't directly requiring light, though they do need byproducts of LDR like NADPH and ATP, located in stroma.</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Can only occur during the day b/c for most plants stomata is only open during day to let CO2</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Inputs of ATP,NADPH,CO2 and outputs of carbohydrate(glucose),ADP+P,NADP+</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Uses ATP+NADPH from LDR to reduce CO2/other derivatives to produce carbohydrate that can be converted to glucose, recycles ADP+P and NADP+ back to LDR</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>CARBON FIXATION: CO2 gets fixed/incorporated into organic compound w help of the enzyme Rubisco fixing CO2 (1C) to RuBP (5C) forming short-term 6C intermediate which splits to form 2 3PG/PGA</li>
                                <li>REDUCTION: 3PG/PGA ultiamtely is reduced to form G3P/PGAL through hydrolysis of ATP and reducion of other intermediates by NADPH (NADPH drops off passengers NADPH->NADP+2e+H+. Excess H2O is released here</li>
                                <li>REGENERATION: Some G3P converted to glucose which is used to build complex carbs, but most (5/6 molecules) converted back to RuBP to continue cycle, requriring hydrolysis of 3 ATP molecules</li>
                            </ol>
                            <p style="margin:10px 0 8px;font-size:12.5px;">TOTALS: 1 net G3P/PGAL + regeneration of RuBP requires hydrolysis of 9ATP molecules and oxidation of 6NADPH molecules. Cyclic LDR electron flow needed since more ATP than NADPH needed. From one turn of Calvin Cycle, 1 G3P and ADP+P,NADP+ recycled back to LDR so two turns needed to create glucose.</p>
                            <p style="margin:0;font-size:12.5px;">G3P can also form other molecules</p>
                        </div>
                    </div>

                    <h3>Adaptations / Evolution of Photosynthesis</h3>
                    <ul>
                        <li>Photosynthesis evolved first in cyanobacteria which got engulfed by larger prokaryotes</li>
                        <li>Calvin Cycle occurs dmostly during day and photosynthesis happens in chloroplasts of mesophyll cells</li>
                        <li>Not all plants live in ideal photosynthetic conditions, they may live in hot/dry/low sunlight areas so photorespiration would occur which is when O2 binds w subisco instead of CO2 so sugars aren't made (open stamata loses too much water, close stomata accumulates O2)</li>
                    </ul>
                    <div class="note-grid-2">
                        <div class="note-card">
                            <p class="note-card-title">CAM plants</p>
                            <p style="margin:0;font-size:12.5px;">CAM PLANTS - partition photsynthesis by time so stomata opens at night to take in CO2 and let O2 out so less water evaporation occurs, carbon fixation happens at night and calvin cycle occurs during day (ex: cacti, pineapples, jade plants, succulents)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">C4 plants</p>
                            <p style="margin:0;font-size:12.5px;">C4 PLANTS - partition photosynthesis by location so stomata takes in CO2 and converted to C4 compound in mesophyll cells deeper in leaf, then back to CO2 in bundlesheath where calvin cycle occurs (ex: corn, sugarcane, crabgrass)</p>
                        </div>
                    </div>

                    <h2 id="h-u3-ch8">Chapter 8: Cellular Respiration</h2>
                    <h3>Overview</h3>
                    <ul>
                        <li>Exergonic, catabolic ell process breaking down glucose from photosynthesis and release energy used to build ATP molecules</li>
                        <li>C6H12O6 + 6O2 (both from photsynthesis)-> 6CO2 + 6H2O + energy (energy released helps build ATP)</li>
                        <li>All organisms carry out cell respiration involving many steps, reactions, enzymes including redox reactions (glucose becomes oxidized to 6CO2, 6O2 becomes reduced to 6H2O)</li>
                        <li>Gradual release of energy in glucose to produce ATP gradually (if not gradual it would become unusable heat) since mitochondria uses energy from glucose breakdown to build ATP molecules through electron transport chain</li>
                        <li>Shuttle busses in cell respiration: NAD+ (empty oxidized form shuttle) + 2e- + H+ -> NADH (full reduced form shuttle carrying 2e- and 1H+), FAD (empty oxidized form shuttle) + 2e- + 2H+ -> FADH2 (full reduced form shuttle carrying 2e- and 2H+)</li>
                        <li><strong>Aerobic Cell Respiration (O2 present):</strong> Glycolysis -> prep reaction/oxidation of pyruvate -> citric acid/krebs cycle -> ETC (chemiosmosis/oxidative phosphorylation)</li>
                        <li><strong>Anaerobic Cell Respiration (O2 absent):</strong> Glycolysis -> fermentation --. alcohol or lactic acid</li>
                        <li>2 ATP from glycolysis, 2 ATP from krebs cycle, 32/34 ATP from ETC so 36/38ATP total</li>
                    </ul>

                    <h3>Aerobic Cell Respiration</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card" style="grid-column:1/-1;">
                            <p class="note-card-title">Glycolysis</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Glyco = sugar, lysis = splitting, Occurs in both aerobic and anaerobic organisms since no O2 necessary in the cell cytoplasm</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Inputs: glucose(6C), 2NAD+, 2ATP, 4ADP+4Pi. Outputs: 2 pyruvates/pyruvic acids, 2NADH, 2ADP, 4ATP. Net outputs: 2ATP, 2Pyruvates, 2NADH full shuttles</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>Glucose(6C) gets phosphorylated by hydrolysis of 2ATPs in energy investment step</li>
                                <li>Glucose gets split into 2 G3P/PGAL (3) and each G3P gets oxidized and each loses 2e- and 1H+ to NAD+ ultimately forming 2 pyruvate/pyruvic acid molecules and generating ATP in process through substrate-level ATP synthesis in energy harvesting steps</li>
                                <li>Substrate Level Phosphorylation / Substrate Level ATP Synthesis/Fromation: coupling building of ATP (endergonic) w energy from enzyme-catalized exergonic rxn only generating small amts of ATP, simpler than ATP production via chemiosmosis/photophosphorylation</li>
                                <li>If O2 present, 2 pyruvates enter mitochondrial matrix where rest of cell respiration occurs. If O2 absent, fermentation occurs in cytoplasm.</li>
                            </ol>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Preparatory reaction / oxidation of pyruvate / link reaction</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Located in mitochondrial matrix, process links glycolysis to citric acid cycle by oxidizing the pyruvate product to form acetyla CoA product needed for citric acid cycle</p>
                            <p style="margin:0;font-size:12.5px;">Inputs: 2 pyruvates (3C), 2 coenzymeA (enzyme helped carrier acetyl group to citric acid cycle), 2NAD+. Outputs: 2 acetyl coA (2C), 2CO2 (1C waste product used in calvin cycle in photosynthesis or exhaled into atmosphere in heterotrophs), 2NADH (carries extra electrons/H+ to ETC)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Citric acid cycle / Krebs cycle</p>
                            <ul style="margin:0;padding-left:18px;">
                                <li>Located in mitochondrial matrix, more CO2 released from organic intermediates, more ATP synthesized from ADP+P through substrate level phosphorylation, electrons/H+ from intermediates transferred to coenzyme carrier molecules, NADH and FADH2 shuttle buses carry them over to ETC</li>
                                <li>Acetyle coA -> coEnzyme A which goes back to prep rxn, 2CO2 released as NAD+->NADH and ADP+P-->ATP and FAD->FADH2 and NAD+->NADH again</li>
                                <li>Citric acid occures twice per glucose molecule since 2 pyruvates form from glycolysis</li>
                                <li>Inputs: 2 acetyl groups carried by coA, 6NAD+, 2FAD, 2ADP+2Pi. Output: 6NADH, 2FADH2, 2ATP, 4CO2, 2coA</li>
                            </ul>
                        </div>
                        <div class="note-card" style="grid-column:1/-1;">
                            <p class="note-card-title">Oxidative phosphorylation / ETC &amp; chemiosmosis (cell respiration)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Oxidative Phosphorylation</strong>: process where NADH, FADH2, moving electrons, and H+ gradients used to create ATP through ETC/chemiosmosis. O2 is driving forceLocated in the inner cristae membrane of mitochondria & plasma membrane of aerobic prokaryotes</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Inputs: 10NADH+2FADH2+lots ofADP+P+6O2 -> Outputs: 10NAD++2FAD+lots o fATP+6H2O</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">If this was decoupled from electron transport, the ETC wouldn't be coupled w ATP synthesis so the energy wopuld be lost as heat (ex: body temp regulation like brown fat in infants/hibernationg orgaanisms)</p>
                            <ol style="margin:0;padding-left:18px;">
                                <li>NADH and FADH2 carry H+/e- to cristae of mitochondria and get oxidized back to NAD+ and FAD which are resused to earlier steps</li>
                                <li>High energy electrons get passed along to molecules of ETC and leave as low energy</li>
                                <li>Protons get dropped of in mitochondria matrix and actively pumped into intermembrane space to form H+ gradient inside intermembrane space, contributing to ATP production and H+ in matrix also contribute to production of H2O from O2</li>
                                <li>Redox reactions allow electrons to get carried across chain (cytochrome molecules are redox carriers) releasing energy at each carrier</li>
                                <li>This energy released is used to power 3 proton pumps to actively pump H+ across cristae from matrix to intermembrane space to build steep gradient</li>
                                <li>ATP synthase provides channel to allow H+ to travel back down to matrix synthesizing ATP from ADP+P through chemiosmosis</li>
                                <li>O2 is final electron acceptor in ETC  which combines w available H+ to form water (0.5O2 +2e- +2H+ -> H2O)</li>
                            </ol>
                        </div>
                    </div>

                    <h3>Anaerobic Cell Respiration / Fermentation</h3>
                    <p>Process producing limited ATP amounts from glycolysis only if O2 is absent. Glycolysis occurs as usual w same inputs/outputs, but ETC can't proceed so NAD+ can't get regenerated. Yields 2ATP each time it happens which isn't much but some ATP can produced in absence of O2.</p>
                    <p>Pros: used for food prep like cheese, yogurt, pickles (lactic acid fermentation), yeasts used to make bread rise (alcohol fermentation), lactic acid fermentation needed in animal cells when muscles work vigorously/rapid energy burst</p>
                    <p>Cons: low yield of only 2 ATPs via substrate-level phosphorylation (during glycolysis), less efficient than aerobic respeication since 2.1% compared to 39% aerobic</p>
                    <div class="note-grid-2">
                        <div class="note-card-muted">
                            <p class="note-card-title">Alcohol fermentation</p>
                            <p style="margin:0;font-size:12.5px;">Occurs in fungi, yeast, bacteria, where pyruvates from glycolysis lose CO2 to become 2 acetaldehydre coupled with 2NADH->NAD+(needed for reuse) to become 2 ethanol</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Lactic acid fermentation</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Occurs in animal muscle cells, some fungi and some bacteria</p>
                            <p style="margin:0;font-size:12.5px;">2 pyruvates becomes 2 lacate coupled w 2NADH->2NA+ rxn for reuse</p>
                        </div>
                    </div>
                    
                    <h3>Metabolic Pool</h3>
                    <div class="callout">Primary pathway making ATP is by breaking down glucose/carbs, but if unavailable bodies may break down fats/triglycerides or proteins to get required energy and can alternatively lead to formation of molecules along pathway leading to ATP production</div>
                    `   
            },
            "Unit 4: Cell Communication & Cell Cycle": {
                tags: ["cell communication", "signal transduction", "ligands", "feedback", "cell cycle", "mitosis", "cell division"],
                content: `
                    <h2 id="h-u4-ch5b">Chapter 5B: Membrane Structure &amp; Function — Signal Transduction Pathways</h2>
                    <div class="callout" style="margin-bottom:16px;">
                        <p style="margin:0 0 8px;">Communication / cell signalling needed to make adjustments if needed to maintain homeostasis, can diffuse locally or travel distances</p>
                        <p style="margin:0;">Evolved millions of years ago in a common ancestor so similar pathways in most organism</p>
                    </div>

                    <h3>Types of Signals</h3>
                    <div class="note-grid-2" style="align-items:stretch;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Autocrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell targets and sends signal to itself</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Juxtacrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell sends message to another cell through direct cell-to-cell contact</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Paracrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell targets and sends nearby cell</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Endocrine Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Cell sends signal/hormone through bloodstream to distant but specific cell</p>
                        </div>
                    </div>

                    <h3>Signal Transduction Pathways</h3>
                    <p>Cells interpret signals once received, basic pathway include signaling, reception, transduction, response.</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">1. Signaling</p>
                            <p style="margin:0;font-size:12.5px;">Signaling molecules / ligands serve as chemical messengers allowing specific target cells to communicate and respond appropriately. Ex: Steroid/protein hormones, neurotransmitters, growth facts, etc</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">2. Reception</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Receptor of target cells has both shape & charge compatibility w the ligand, ligands bind to protein receptors</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cell-Surface Receptors - protein receptors embedded in cell membrane if too large to get through membrane (ex: protein hormone like insulin)</p>
                            <p style="margin:0;font-size:12.5px;">Intracellular Receptors - protein receptors located inside cell if small/hydrophobic (ex: steroid hormone, testosterone)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">3. Transduction</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Where original intercellular signal gets converted into a series of intracellular signals triggering some cellular response</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cascade of events / conformational changes and secondary messengers activating proteins like the secondary messenger and relaying orignal signal and amplifying it to cause response</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Amplification provides multiple opportunities for coordination/regulation in the cell</p>
                            <p style="margin:0;font-size:12.5px;">Common secondary messenger: cAMP (cyclic AMP) which targets and activates protein kinases which are enzymes phosphorylating and activating other enzymes in cascade</p>
                        </div>
                        <div class="note-card">
                            <p class="note-card-title">4. Response</p>
                            <p style="margin:0;font-size:12.5px;">Cellular responses including changes in gene expression, protein activity, metabolism, passage of substances in/out, division, death/apoptosis</p>
                        </div>
                    </div>

                    <h3>Cell Communication / Signal Transduction Examples</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Peptide Hormone Endocrine Signaling</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Includes most hormones, peptides, proteins, glycoproteins, modified amino acids, all peptide derivative ligands</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Peptides hormones are lipid insoluble so can't pass through cell membrane</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Biinds specifically & reversibly to plasma membrane receptors which activates signal transduction pathway causing cell response</p>
                            <p style="margin:0;font-size:12.5px;">Ex: epinephrine (emergency fight or flight hormone) causing response of higher blood glucose levels</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Steroid Hormone Endocrine Signaling</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Lipids derived from cholesterol, secreted by adrenal cortex above kidneys, ovaries, testes</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Lipid soluble so can pass cell membrane and enter cell via membrane and bind to internal receptor in nucleus/cytoplasm instead of surface receptor</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Hormone-receptor complex binds to DNA and activates certain genes, mRNA produced which moves to the ribosome and synthesizes appropriate protein</p>
                            <p style="margin:0;font-size:12.5px;">Steroid hormones usually slower than peptide hormones bc takes longer to create protein from scratch instead of activating ones alr in the cell. Not as much internal messaging/transduction.</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cell Communication in the Nervous System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Adjacent nerve cells/neurons communicate w each other through paracrine signaling by releasing neurotransmitters</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Neurotransmitters - chemical messages stored in vesicles in axon terminal</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Membrane proteins (ex: voltage/ligand gated ion channels) along neuron cell membranes enable electrical messages (impulses) to travel along neurons causing release of neurotransmitters between neurons</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">These signals cause next neuron to become excited resulting in response</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Synapse: the region between neurons (nerve impulses cannot occur here and need to travel across gap as neurotransmitters</p>
                            <p style="margin:0;font-size:12.5px;">Voltage Gated Ion Channels In Neurons - enable/prevent passage of certain ions depending on voltage along neuron membrane, allowing impulses to travel across neuron (ex: Na+, K+, Ca2+ channels)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cell Communication in the Immune System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Immune response to infection is release of chemical immune system protein messengers called cytokines</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cytokines - affect behaviors and signal immune system to do its job (ex: mast cells important for wound healing/defense releasing cytokines to create inflammatory cascade increasing bloodflow - endocrine, macrophages WBC that destroy pathogens w enzymes releasing cytokines releasing more WBC's (endocrine) and then present antigen on membrane releasing more cytokines to stimulate helper T-cells to initaite defense (juxtacrine/paracrine) which stimulate cells producing antibodies and immune response releasing interferon proteins to alert neighboring cells - paracrine)</p>
                            <p style="margin:0;font-size:12.5px;">Some viral illnesses like COVID cause immune system overreaction</p>
                        </div>
                    </div>

                    <h3>Communication in 3 Body Systems</h3>
                    <div class="note-grid-3" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Endocrine System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ligands/intercellular primary signaling molecule messengers: HORMONES</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Peptide/protein hormones are large, hydrophillic, w receptor in cell membrane (ex: epinephrine, insulin)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Steroid/lipid hormones are small, hydrophobic, w receptors in the cell (ex: estrogen, testosterone)</p>
                            <p style="margin:0;font-size:12.5px;">Have receptorsa on various target body cells depending on type of hormone</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Nervous System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ligands/intercellular primary signaling molecule messengers: NEUROTRANSMITTERS</p>
                            <p style="margin:0;font-size:12.5px;">Proteins/peptides have receptors in cell membrane of nerve cells</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Immune System</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Ligands/intercellular primary signaling molecule messengers: CYTOKINES</p>
                            <p style="margin:0;font-size:12.5px;">Proteins have receptors embedded in cell membrane of immune cells</p>
                        </div>
                    </div>

                    <div class="callout" style="margin-top:14px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">Intracellular secondary messengers: cAMP (cyclic AMP) which initiate enzyme cascades in cell causing cellular response</p>
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>PROTEIN KINASES</strong>: enzyes that are a big part of enzyme cascades since they phosphorylate and activate/deactivate other enzymes/proteins in the cascade</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">PHOSPHORYLATE = add phoswphate, PHOSPHORYLATION changes the shaqpe of the protein along cascade to activate/deactive it</p>
                        <p style="margin:0;font-size:12.5px;">Amplification - big response from tiny signal activating hundreds of molecules and speeds up response quickly/efficiently</p>
                    </div>

                    <h2 id="h-u4-ch9">Chapter 9: The Cell Cycle and Cellular Reproduction (Cell Division)</h2>
                    <h3>The Cell Cycle</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">The life of a cell from formation to division, in between division the cell grows larger (to a limit), organelle # increases, DNA is replicated, cell functions continue</p>
                        <p style="margin:0;font-size:12.5px;">Cell cycle/life spans vary by type and divides at diff rates (ex: embryonic cells divide very fast, bone cells divide slow, nerve/muscle cells don't replicate at all once mature)</p>
                    </div>

                    <h3>Cell Cycle Stages</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card" style="grid-column:1;">
                            <p class="note-card-title">Interphase</p>
                            <p style="margin:0 0 10px;font-size:12.5px;">Phase between active cell divisons, includes the G1, G0, S, and G2 phases</p>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">G1 Phase (gap or growth phase 1)</p>
                            <ul style="margin:0 0 12px;padding-left:18px;">
                                <li>Cell recovers from past division, replicates organelles, grows a little in size, accumulates raw materials for DNA replication, carries out function</li>
                            </ul>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">S Phase (DNA synthesis/replication phase)</p>
                            <ul style="margin:0 0 12px;padding-left:18px;">
                                <li>DNA copied so daughter cells have complete set of chromoesome after cell divides, proteins associated w DNA replication synthesizes, cell carries out functions</li>
                                <li>DNA is unraveled in form of chromatin (tangled mass of threads) though but it still replicates</li>
                                <li>Sister chromatids remain attached at centromere until they seperate during mitosis. Histone proteins coil/condense replicated DNA into chromosomes. Diploid # is species characteristic number of chromeomses found in all cells as homologous chromomosomes (2n), haploid # is cells containing one chromosome of each kind - gametes like sperm and egg cells </li>
                                <li>Centrosome (microtubule organizes center of cell, each containing two centrioles in animal cells only) replication begins during S phase but ends in G2</li>
                            </ul>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">G2 Phase (gap or growth phase 2)</p>
                            <ul style="margin:0 0 12px;padding-left:18px;">
                                <li>Phase between replication and division, cell functions continue, cell synthesizes proteins necessary for divison like proteins that assemble microtubules or form mitotic spindle fibers</li>
                                <li>Centrosome replication finishes here</li>
                            </ul>
                            <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">G0 Phase</p>
                            <ul style="margin:0;padding-left:18px;">
                                <li>Cell stage enters when it continues to perform normal everyday activities w/o preparing for cell division</li>
                                <li>Most mature adult cells remain in G0 and never divide again but can enter G1 phase if necessary, but mature nerve/muscle cells never reenter cell cycle</li>
                            </ul>
                        </div>
                        <div style="display:flex;flex-direction:column;gap:12px;">
                            <div class="note-card-muted">
                                <p class="note-card-title">Mitotic (M) Phase</p>
                                <ul style="margin:0 0 10px;padding-left:18px;">
                                    <li>Phase where sister chromatids are separated and distributed to 2 daughter cells</li>
                                </ul>
                                <p style="margin:0 0 8px;font-size:12.5px;">Includes mitosis/nuclear division (prophase, prometaphase, metaphase, anaphase, telophase)</p>
                                <ul style="margin:0 0 12px;padding-left:18px;">
                                    <li>Mitosis - continous process arbitrarily divided into 5 phases, aids in growth/development to increase # of cells present (2n zygote -> 8 cell stage-> blastula-> gastrula->embryo->fetus), repair of lost cells</li>
                                    <li>Prophase - Chromatin has condensed into distinguishable chromosomes that is already duplicated composed of 2 sister chromatids held by centromere (count centromeres to get # of chromoesomes). Nucleoli disappear, nuclear envelope begins to disintegrate, spindle fibers consisting of microtubules begin to assembles as centrosomes move away from each other</li>
                                    <li>Prometaphase (aka late prophase) - nuclear envelope continues to fragment allowing microtubule spindle fibers to attach to chromosomes, centromeres develope kinetochromes which are specialized protein complex representing spindle fibers attach location, chromsomes attach to spindle fibers but not yet aligned at center of cell</li>
                                    <li>Metaphase - centromeres now aligned on single plate (metaphase equatorial plate) in middle of cell</li>
                                    <li>Anaphase - sister chromatids seperate away from each other giving rise to daughter chromosomes each w a centromere that move via microtubule track to opposite poles pulled by spindle fibers causing cell elongation so each pole has copmplete equal set of chromosomes</li>
                                    <li>Telophase - spindle fibers disappear/disassemble, new nuclear envelopes reform around each set of daughter chromosomes, chromosomes begin to unravel into chromatin again. Each daughter nucleus contains same # and kinds of chromosomes as original parent nucleus</li>
                                </ul>
                                <p style="margin:0 0 6px;font-size:12px;font-weight:500;color:var(--ink);">Cytokinesis</p>
                                <ul style="margin:0;padding-left:18px;">
                                    <li>Division of cytoplasm splitting cell, resulting in 2 daughter cells w identical DNA to parent, allocates cytoplasm equally and encloses daughter w membrane</li>
                                    <li>Animal Cells: cleavage furrow (membrane indentation) appears between daughter nuclei formed by contractile ring of actin microfilaments forming circular constriction pinching daughter cell in 2</li>
                                    <li>Plant Cells: cell wall prevents furrowing, cell plate formed which involves golgi producing vesicles which eventually fuse into one thin vesicle extending across middle of mother cell, cell plate forms as more vesicles arrive and fuse which releases molecules forming new cell wall strengthened by shuttling of cellulose, space between daughter cells becomes filled w middle lamella cementing adjacent cells together</li>
                                </ul>
                            </div>
                            <div class="note-card-muted">
                                <p class="note-card-title">Checkpoints / Control of Cell Cycle</p>
                                <p style="margin:0 0 8px;font-size:12.5px;">Cell cycle must be regulated for normal cell growth through internal/external signlas influencing cell activity</p>
                                <p style="margin:0 0 8px;font-size:12.5px;">G1 phase (restriction) checkpoint - main important checkpoint, cell remains in G0 until it passes this, ensuring DNA isn't damaged before replication and environemnt is appropriate w enough energy/nutries and growth signals/resources available. Proceed to S phase if passes (Located between G1 and S phase)</p>
                                <p style="margin:0 0 8px;font-size:12.5px;">G2 phase (mitosis) checkpoint - ensures DNA has finished replicating properly and all proteins are made aiding in cell division, DNA not physically damaged, enough energy to divide. If pass it proceeds to mitosis, otherwise it stops until fixed. (located in G2 phase right before end)</p>
                                <p style="margin:0;font-size:12.5px;">M phase (spindle assembly) checkpoint - ensyres chromosomes properly attached to spindle fibers so proper # of chromosomes can be distributed to daughter cells, if not mitosis will not continue (located in between meta and anaphase of mitosis)</p>
                            </div>
                        </div>
                    </div>

                    <h3>External Signals / Factors</h3>
                    <div class="note-grid-3" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Anchorage Dependence</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Most cells must contact solid surface to divide, must be anchored</p>
                            <p style="margin:0;font-size:12.5px;">Anchored cell can divide, not anchored cell can't grow/divide</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Density-Dependent Inhibition</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Crowded cells will stop dividing, uncrowded cells may divide</p>
                            <p style="margin:0;font-size:12.5px;">Higher density=no growth/division, low density=cells can divide</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Growth Factors</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Proteins released by cells stimulating division of other cells</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">At least 50 diff growth factors in body</p>
                            <p style="margin:0;font-size:12.5px;">Cell that receives growth factor signal goes on to divide, if not cell won't divide</p>
                        </div>
                    </div>

                    <h3>Internal Signals/Factors</h3>
                    <p>For cell to move past checkpoints, all positive regulators should be on and negative regulators off</p>
                    <p style="margin:16px 0 8px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Positive regulators</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Cyclin Dependent Kinases (Cdk's)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Enzymes always present in cell in relatively stable amt but only active when bound to cyclin proteins and phosphorylated by other kinases</p>
                            <p style="margin:0;font-size:12.5px;">Kinases - class of enzyme proteins that add P to substrate, changing shape and activating them, providing energy through phosphorylation for processes</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Cyclins</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Proteins made at specific times in cell cycle that activate specific CDKs, encoded by group of proto-oncogenes</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If bound to cyclinks, CDKs will give signals at cell cycle checkpoints</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If no cyclins present or bound to CDKs, cell cycle will stop at checkpoint and not proceed</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cyclin concentrations fluctuate and determine when cdk/cyclin complexes form and bind at specific pts</p>
                            <p style="margin:0;font-size:12.5px;">Active cyclins from previous stage degraded as cell moves to next stage, cyclin concentration increases triggered by external/internal signals</p>
                        </div>
                    </div>
                    <p style="margin:18px 0 8px;font-family:var(--mono);font-size:10px;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink3);">Negative regulators</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p class="note-card-title">Retinoblastoma Protein (Rb)</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Tumor-suppresor protein monitoring cell-size halting progression to S phase until cell appropriate size</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Active/dephosphorylated state - Rb binds to E2F transcription factor which blocks production of proteins needed for G1/S transition and Rb slowly phosphorylated by Cdks until inactivated as cell increases in size</p>
                            <p style="margin:0;font-size:12.5px;">Inactive/phosphorylated state - Rb releases E2F which can turn on gene producing proteins necessary for S phase progression</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">p53 and p21</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Tumor suppressor proteins impacting cell division</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If damaged DNA in cells during G1 detected, p53 halts cell cycle and recruits enzymes to repair DNA</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">If DNA can't be repaired, p53 triggers apoptosis/programmed cell death to prevent duplicating damaged chromosomes</p>
                            <p style="margin:0;font-size:12.5px;">Rising p53 levels produces p21 which enforces halt in cycle dictated by p53 by binding/inhibiting Cdk/cyclin complex activity</p>
                        </div>
                    </div>

                    <h3>Apoptosis</h3>
                    <div class="note-card-muted">
                        <p style="margin:0 0 8px;font-size:12.5px;">Programmed cell death where cell events bring about death induced by caspase enzymes</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">First cell rounds up/dissociates from other cells, nucleus fragments, plasma membrane blisters forming blebs, cell fragments contain DNA fragments which get engulfed by WBCs</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Cell division & apoptosis are opposing forces that increase/decrease cell # maintaining homeostasis at appropriate cell #</p>
                        <p style="margin:0;font-size:12.5px;">Functions: necessary for development (ex: webbed fingers/toes disappear), prevent abnormal cells from becoming canerous, kill virus-infected cells, prevent tuumor from developing</p>
                    </div>

                    <h3>Adult Stem Cells</h3>
                    <div class="note-card">
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>Stem Cell</strong>: immature, undifferentiated cell capable of producing many diff types of mature differentiated/specialized cells</p>
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>Cell Potency</strong>: cell's ability to differentiate into other cell types (totipotent/omnipotent most able to differentiate (ex: zygotes), pluripotent early embryonic stem cells, multipotent umbilical cord stem cells, unipotent least able to differentiate (ex: specialized adult cells))</p>
                        <p style="margin:0 0 8px;font-size:12.5px;"><strong>Differentiation</strong>: process where cells begin to specialize, plays role in morphogenesis causing organism to develop its shape</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Types of stem cells: early embryonic stem cells, umbilical cord stem cells, adult stem cells, induced multi-potent stem cells w lots of potential</p>
                        <p style="margin:0;font-size:12.5px;">Most adult cells remain in G0 phase and don't need to divide but are still able to divide if needed to replensish</p>
                    </div>

                    <h3>Prokaryotic Cell Division</h3>
                    <div class="note-card-muted">
                        <p class="note-card-title">Binary Fission</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Duplicate circular DNA before division, rokaryotes elongate until double original size, then pinches/seperates to 2 identical daughter cells (very quick process overall)</p>
                        <p style="margin:0;font-size:12.5px;">2 new individuals formed so for prokaryotes, cell division is like asexual reproduction where offspring are genetically identical to parent</p>
                    </div>

                    <h3>Cancer</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <p style="margin:0 0 8px;font-size:12.5px;">Cellular growth disorder resulting from uncontrolled cell division, usually gradual result of accumulating mutations</p>
                        <p style="margin:0;font-size:12.5px;">Regulatory factors usually prevent it from becoming cancerous</p>
                    </div>
                    <p style="margin:0 0 10px;font-size:12.5px;">Cancer cells lack differentation (not specialized, don't contribute to tissue function), immortal (can enter cell cycle indefinite # of times), look abnormal/have abnormal nuclei (nuclei may be unlarged w abnormal chromosome # or extra/deleted gene copies), dont undergo apoptosis unless immune system triggers external signal</p>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card">
                            <p class="note-card-title">Tumor types</p>
                            <p style="margin:0;font-size:12.5px;"><strong>Tumor</strong>: abnormal overgrowth of cells piled on top of each other since cancer cells have no CONTACT INHIBITION controlling mitosis (benign: not cancerous, encapsulated, don't spread/invade neighboring tissue. malignant: cancerous, not encapsulated, invade neighboring tissue, detach/lodge in distant places through metastasis, results from gene mutations)</p>
                        </div>
                        <div class="note-card-muted">
                            <p class="note-card-title">Metastasis &amp; angiogenesis</p>
                            <p style="margin:0 0 8px;font-size:12.5px;">Cancer cells undergo metasis - additional mutations making benign-&gt;malignant, malignant tumor have potential for metastasis and can spread through body/blood and form new tumors</p>
                            <p style="margin:0;font-size:12.5px;">Cancer cells undergo angigensis: mutations allowing for formation of new blood vessels into tumor receiving nutrients&amp;oxygen for growth but healthy cells become deprived of nutrients</p>
                        </div>
                    </div>
                    <div class="callout">
                        <p style="margin:0 0 8px;font-size:12.5px;">Origin: caused by mutations usually affecting proto-onco genes (ex: cyclins, cdks, growth factors) which are proteins promoting cell cycle/preventing apoptosis which can be mutated to become oncogene promoting uncontrollable cell divison since thye never turn off. or affecting tumor-suppresor genes (ex: Rb, p53,p21) which are proteins inhibiting cellcycle promoting apoptosis but mutation causes no more inhibition</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Causes: growth factor binds to receptor protein initiating rxn triggering stimulatory pathway whcich begins at plasma membrane turning on protooncogene which promote cell cycle. inhibtory pathway begins w tumor-suppressor genes where products inhibit cell cyle unless mutated</p>
                        <p style="margin:0;font-size:12.5px;">Other causes: telomerase (enzyme regulating telomere - end of chromomsome preserving DNA loss - length) mutation causing unregulated activity allowing uncontrolled cell division in cancer cells w/o preservation</p>
                    </div>

                    <h3>C-words</h3>
                    <div class="note-grid-2" style="align-items:start;">
                        <div class="note-card-muted">
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Chromosome</strong>: coiled DNA visible at mitosis start, looks like X if double or can be half of an X if single</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Chromatin</strong>: uncoiled material making up chromosomes DNA, looks like messy threads</p>
                            <p style="margin:0;font-size:12.5px;"><strong>Chromatid</strong>: one of the 2 identical hales of a replicated chromosome (each half on either side of the centromere are sister chromatids)</p>
                        </div>
                        <div class="note-card">
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Centriole</strong>: Organelle in animal cell determining plane of division found inside centrosome</p>
                            <p style="margin:0 0 8px;font-size:12.5px;"><strong>Centromere</strong>: Middle of chromosome joining sister chromatids and attachment point for spindle fibers during division</p>
                            <p style="margin:0;font-size:12.5px;"><strong>Centrosome</strong>: Organelle made of microtubules containg centrioles from which spindle fibers develop in cytoplasm</p>
                        </div>
                    </div>
                    `
            }
        }
    },
    "AP United States History": {
        units: {
            "Unit 1: 1491-1607": {
                tags: ["Native Americans", "European Exploration", "New World", "Columbin Exchange", "Spanish Exploration/Colonial System"],
                content: `
                    <h2 id="h-apush-u1-11">1.1: Contextualizing Period 1</h2>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Intersection of various indigenous populations in Americas</li>
                            <li>Contact w Euorpeans, enslaved Africans forced to New World brought to Americas</li>
                        </ul>
                    </div>
                    <h3>Contextualization</h3>
                    <div class="note-card">
                        <p style="margin:0 0 8px;font-size:12.5px;">Intersectionality of themes in history, identify/describe broader historical context situated for specific historical development/process</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">DBQs, LEQs, sometimes SAQs through 2-3 sentences abt diff event</p>
                        <p style="margin:0 0 8px;font-size:12.5px;">Historical events understood in short and longterm context of similar events (historical circumstances of event)</p>
                        <p style="margin:0;font-size:12.5px;">Link argument to broader events/processes</p>
                    </div>

                    <h2 id="h-apush-u1-12">1.2: Native American Societies Before European Contact</h2>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Geographic/environmental factors like competition /debates about natural resources fostering America development and regional diversity</li>
                            <li>Diverse complex Indian societies in Americas w/ social structure (some even w ladies in charge) and agricultural innovation (1491-1607)</li>
                            <li>Collisions of cultures between North, South, West, and Plains regions in US/Mexico (ex: Great Basin, Northeast, etc)</li>
                            <li>First migrations into America across Bering Strait in Alaska around 11k years ago, Asian land based migrants from near Siberia (fom Asia to around Chile and Peru)</li>
                            <li>American Indian culture strongly influenced by corn cultivation before 1492 spreading from Mexico to America supporting settlement, irrigation, social diversification, economic development molding Pueblo culture</li>
                        </ul>
                    </div>
                    <h3>Archaic Period</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Period 5000BCE beginning in 8000BCE, hunting/gathering in this region of Great Plains</li>
                            <li>Agriculture based on corn/maize in Americas, squash&beans also importnatn</li>
                        </ul>
                    </div>
                    <h3>Archaic Period: Civilization in South (South/Central Amercica & Mexico)</h3>
                    <div class="note-card" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Most elaborate early civilizations were here</li>
                            <li><strong>Incas:</strong> largest empire in Americas in Peru</li>
                            <li><strong>Meso-Americans:</strong> people in today's Mexico/Central America</li>
                            <li><strong>Mayans:</strong> strong South Mexico civilization, created a written language, numerical system compared to Arabic numerals, accurate calendar, important trade routes, advanced agriculture</li>
                        </ul>
                    </div>
                    <h3>Archaic Period: Civilization in North America (United States)</h3>
                    <div class="note-card-muted">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Complex civilizations in North had hunting, gathering, fishing</li>
                            <li><strong>Southwest: </strong>complex irrigation systems for farming on dry land, corn cultivation spread to America from Mexico transforming nomads to settled agricultural villages</li>
                            <li>Civilizations/towns had centers of trade, crafts, religious, civic rituals</li>
                            <li><strong>Great Plains</strong>: sedentary farming for corn/maize and other grains</li>
                            <li>Small nomadic tribes still had buffalo hunting</li>
                            <li><strong>Woodland Indians</strong>: tribes from Eastern US with good farming, hunting, gathering, fishing, large corn/grain-based trading networks in Mississippi River Valley. Illinois peak in 1200AD w/ population of 10k and complex of large earthen mounds</li>
                            <li><strong>East of Mississippi</strong>: common linguistic roots (largest language group was Algonquian),  dominated Canada to Virginia</li>
                            <li><strong>Iroquois</strong>: upstate NY tribe w 5 distinct northern "nations": Seneca, Cayuga, Onondage, Oneida, Mohawk (links to Cherokees).</li>
                            <li><strong>Tuscaroras:</strong> further south in Carolinas and Georgia</li>
                            <li><strong>Muskogean</strong>: southernmost east US tribes like Chickasaws, Choctaws, Creeks, Seminoles (matrilineal society escaped from Creeks to avoid native movement to Oklahmoma). Rarely united in opposition to European invaders.</li>
                            <li><strong>Pueblo people</strong>: people in Rio Grande valley in Texas building complex irrigation systems to water cornfield, civilization/culture shaped by corn cultivation spread</li>
                        </ul>
                    </div>

                    <h2 id="h-apush-u1-13">1.3: European Exploration in the Americas</h2>
                    <h3>European Exploration Context</h3>
                    <div class="note-card-muted" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Europeans unaware of Americas existence before 15th century, but conditions in Europe changed in and interest in oversease exploration</li>
                            <li><strong>Changing Conditions / Reawakening of Commerce</strong>: Bubonic plague decimated/killed Europe, navigation advancements, shipbuilding making long distance travel more feasible, explorers looking for new markets, new trade routes increased w new tech increasing European efforts to explore/conquer New World</li>
                            <li><strong>New Technology Advances</strong>: sextant navigation latitude/longitude instrument helping explorers w sea travel, caravels sail w wind across Atlantic from Europe to Americas by 1450</li>
                            <li><strong>Historical developments</strong>: Europeans were looking for wealth, economic & military competition, desire to spread Christianity</li>
                        </ul>
                    </div>

                    <h3>Exploration/Conquest</h3>
                    <div class="note-card" style="margin-bottom:12px;">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Portuguese expanded overseas starting ~1400 and took leading role in African slave trade</li>
                            <li>Spain undertook Europe's first conquests in Americas</li>
                            <li>Portuguese traders traveled S and E</li>
                        </ul>
                    </div>

                    <h3>Christopher Columbus</h3>
                    <div class="note-card-muted">
                        <ul style="margin:0;padding-left:18px;">
                            <li>Spanish monarchs Ferdinand II and Isabella I finance Christopher Columbus & built their empire/trade by subsidizing his voyages</li>
                            <li>Explorer from Italy who set sail in August 1492 and reached Bahamas on Nina, Pinta, and Santa Maria after 6 weeks but thought he reached new route to Asia/The Indies and claimed/explored the islands for Spain & called natives Indians/West Indies</li>
                            <li>Demanded tribute from local Taino, Arawak, and Carib people, left 40 men on Hispaniola island (now DR/Haiti) and returned to Spain</li>
                            <li>Life ended in obscurity but his accomplishments made him a hero</li>
                            <li>Name for America came from <strong>Amerigo Vespucci</strong> who was explorer in a later Portuguese expedition to the New World</li>
                            <li><strong>Columbus Day</strong> federal holiday declared in 1934</li>
                        </ul>
                    </div>
                    `
            }
        }
    },
    "AP Psychology": {
        units: {
            "Unit 1: How do we explain and measure behavior?": {
                tags: ["psychoanalysis", "behaviorism", "Sigmund Freud", "Biological", "Modern Perspectives", "Biopsychosocial", "Cognitive", "Humanism"],
                content: `
                    <h2>1.1: Intro & History</h2>
                    <h3>The Modern Perspectives (ordered from nature to nurture, numbered in order from past/present)</h3>
                    <div>
                        <div>
                            <p><strong>Nature</strong></p>
                            <p>Psychology affected by nature/genetics</p>
                        </div>
                        <div>
                            <p><strong>Nurture</strong></p>
                            <p>Psychology affected by environment/society/experiences</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><strong>Evolutionary</strong></p>
                            <p>How natural selection of traits promoted gene survival, humans desire social interaction b/c of need for survival</p>
                        </div>
                        <div>
                            <p><strong>Biological (5)</strong></p>
                            <p>Brain, body chemistry, genetics</p>
                        </div>
                        <div>
                            <p><strong>Psychodynamic/Psychoanalysis (1)</strong></p>
                            <p>Sigmund Freud</p>
                            <p>Unconscious conflicts, early childhood experiences (nurture), innate sex&aggression (nature)</p>
                        </div>
                        <div>
                            <p><strong>Cognitive (4)</strong></p>
                            <p>Thinking and decision making</p>
                        </div>
                        <div>
                            <p><strong>Biopsychosocial (6/modern-day)</strong></p>
                            <p>Biology, Psychology, Society</p>
                            <p>Equally nature vs nurture</p>
                            <p>Affected by biological predispositions/mutations, psychological influences from emotions/fears/etc, society's social-cultural influences from people's expectations</p>
                        </div>
                        <div>
                            <p><strong>Humanism (3)</strong></p>
                            <p>Maslow & Rogers</p>
                            <p>You are inherently good, you have free will, you should close the gap between your real/ideal self through <strong>self-actualization</strong>, you deserve unconditional positive regard</p>
                        </div>
                        <div>
                            <p><strong>Behaviorism (2)</strong></p>
                            <p>Watson&Skinner</p>
                            <p>Observable actions/behavior, learning, environment, rewards/punishment</p>
                        </div>
                        <div>
                            <p><strong>Social-Cultural</strong></p>
                            <p>How behavior/thinking vary across situations/cultures</p>
                        </div>
                    </div>

                    <ul>
                        <li><strong>Industrial/organization field of psychology</strong> - analyze efficiency of businesses in hiring, training, and management</li>
                        <li><stong>Introspection</strong> - observing conscious experiences</li>
                        <li><strong>WEIRD</strong>: western, educated, industrialized, rich, democratic countries which is what psychology is based on (only 12% of people)</li>
                    </ul>

                    <h2>1.2: Research Methods</h2>
                    <h3>Scientific Method / Vocab</h3>
                    <ul>
                        <li><strong>Hypothesis</strong>- testable prediction often implied by a theory</li>
                        <li><strong>Operational Definition</strong>- carefully worded definition of procedures used and how its defined</li>
                        <li><strong>Replication</strong>- Repeating idea of research study w diff participants in diff situations to see how reproducible findings are</li>
                        <li><strong>Self-Report Bias</strong>- bias when people report their behavior inaccurately</li>
                        <li><strong>Population</strong>: all those in group being studied, smaller samples drawn from the population (not the country's population)</li>
                        <li><strong>Random Sample</strong>: sample fairly representing population bc each member has equal chance of inclusion</p>
                    </ul>

                    <h3>Correlation (NOT CAUSATION)</h3>
                    <ul>
                        <li>Measure of extent to which 2 factors vary together and how well they predict each other</li>
                        <li><strong>Correlation Coefficient:</strong> statistical index of relationship between 2 things from -1.00 to +1.00 with 0 meaning no relationshop</li>
                        <li>Scatterplot cluster of dots, w slope of points suggesting direction and amt of scatter suggests correlation/no correlation</li>
                        <li>Illusory correlation - perceiving relationship when there's none (or thinking relationship is stronger than it is)</li>
                        <li>Problems: directionality (difficulty determining what variable causes other in correlational study), third variable problem (influences both variables making them seem directly related)</li>
                    </ul>

                    <h3>Types of Studies</h3>
                    <div>
                        <div>
                            <p><strong>Case Study</strong></p>
                            <p>Non-experimental technique where a individual/group is studied in depth to reveal universal principles</p>
                        </div>
                        <div>
                            <p><strong>Survey</strong></p>
                            <p>Non-experimental technique to obtain attribute/behaviors of a group by questioning representative random sample</p>
                        </div>
                        <div>
                            <p><strong>Naturalistic Observation</strong></p>
                            <p>Non-experimental technique observing/recording behavior in naturally occuring situation w/o trying to manipulate or control situation</p>
                        </div>
                        <div>  
                            <p><strong>Cross-Sectional Study</strong></p>
                            <p>Research comparing people of different ages at the same point in time</p>
                        </div>
                        <div>
                            <p><strong>Longitudinal Study</strong></p>
                            <p>Research following and retesting the same people over time</p>
                        </div>
                        <div>
                            <p><strong>Meta-Analysis</strong></p>
                            <p>Statistical procedure analyzing results of multiple studies for overall conclusion</p>
                        </div>
                    </div>

                    <h3>Experiment</h3>
                    <div>
                        <p>Ideal way since demonstrates causation</p>
                        <p>Random selection (sample selected randomly from population) and then random assignment (sample sorted into control/treatment groups randomly)</p>
                        <p>Research where 1 or more factors/independent variables are manipulated to observe effect on dependent variable through random assignment of participants and controlling of other factors</p>
                        <p>Single-blind procedure: research participants are blind about whehter they are in treatment or placebo group</p>
                        <p>Double-blind procedure: research participants and staff are both blind about whether groups are treatment or placebo used commonly in drug-evaluation studies to avoid EXPERIMENTER BIAS confirming own beliefs</p>
                        <p>Placebo Effect - experimental results caused only by expectations that an agent is active even if its not</p>
                        <p><strong>PARTS OF EXPERIMENT</strong></p>
                        <ul>
                            <li>Participants go through random assignment to Experimental group (group exposed to treatment/independent variable) vs Control Group (group not exposed to treatment as comparison for evaluating treatment group)</li>
                            <li>Convenience sampling - non-random sampling where participants selected based on access/availability</li>
                        </ul>
                    </div>

                    <h3>Ethics</h3>
                    <p><strong>Debriefing</strong>: post experimental explanation of study, purpose, and deceptions</p>
                    <p><strong>Informed consent or assent</strong>: consent giving participatns enough info to let them choose to particpate, assent if minor/someone not legally allowed to give consent is given approparite info but parent/guardian also approves</p>
                    <p></strong>Peer/Institutional Review</strong>: Peer review of theory and study content itself by scientific experts, institutional review by committee to ensure ethicality</p>
                    <p><strong>Confederate</strong>- someone pretending to be a participant even tho really influencing participants as part of the experiment</p>
                    <p><strong>HUMAN RESEARCH:</strong> Institutioanl Research Board (IRB) needed for ethics do no harm to experiment subjects but pain is allowed, confidentiality, right to withdraw whcih shd also be informed</p>
                    <p><strong>ANIMAL RESEARCH:</strong> IRB also, acquired legally, clear scientific purpose, humane treatment w food, shelter, least suffeing feasible but u can even kill them under certain circumstances</p>


                    <h3>Statistics</h3>
                    <ul>
                        <li><strong>Skew</strong>: positive if most scores are low w a few high outliers so tail is streched to right w mean>median, negative if most scores are high w few low outliers so tail streched to left w mean<median</li>
                        <li>Regression towards mean - extreme/unusual scores fall back and regress towards average</li>
                        <li>Bimodal distribution - freq distirbution w 2 distincit peaks so 2 populagtions/underlying processes in data</li>
                        <li>Quantitative is numerical data, Qualitative is in-depth narrative data</li>
                        <li><strong>Effect Sizes</strong>: strength of relationship between 2 variables, w larger effect size meaning stronger relationship</li>
                        <li><strong>Standard Deviation</strong>: how much scores vary around mean score</li>
                        <li>Statistical significance is how likely result occured by chance</li>
                        <li>Generalizability is extent results can be applied to other people</li>
                        <li><strong>Normal Distribution</strong>68% within 1std of mean, 95% within 2std</li>
                    </ul>

                    <h3>Biases</h3>
                    <div>
                        <div>
                            <p><strong>Hindsight Bias</strong></p>
                            <p>Tendency to believe after learning outcome that you would have foreseen it</p>
                            <p>I-knew-it-all-along phenomenon</p>
                        </div>
                        <div>
                            <p><strong>Overconfidence</strong></p>
                            <p>Tendency to be more confident than correct and overestimate accuracy of our beliefs/judgements</p>
                        </div>
                        <div>
                            <p><strong>False Consensus Effect</strong></p>
                            <p>You overestimate and think everyone thinks the same way you do and youe opinions are normal/common</p>
                        </div>
                        <div>
                            <p><strong>Confirmation Bias</strong></p>
                            <p>Search for info that supports your beliefs</p>
                        </div>
                        <div>
                            <p><strong>Self-Serving Bias</strong></p>
                            <p>Take credit for success but not failures</p>
                        </div>
                        <div>
                            <p><strong>Ingroup Bias</strong></p>
                            <p>Tendency to favor your own group and say the group you belong to is good</p>
                            <p>Ingroup (group you belong to) vs outgroup (group you don't belong to)</p>
                        </div>
                        <div>
                            <p><strong>Social Desirability Bias</strong></p>
                            <p>Publicly change answer/opinion to fix it based on that way they think researcher expects/wishes</p>
                        </div>
                    </div>

                    <h3>Development</h3>
                    <p><strong>Attachment</strong>: emotional tie w others shown in young children who seek closeness to caregivers and distress when separated</p>
                    <p><strong>Harry Harlow</strong>: psychologist known for research on attachment w monkeys demonstrating comfort and physical contact besaides only food is important in animal bonds. Experimented on origins of attachment/love/emotional closeness and bonding through 2 monkey moms, one giving food and 1 giving contact comfort and the bond was shown to be about contact comfort not food, important at WW2 time since people didn't care enough for kids. However, study was unethical since isolation damaged them mentally and phtsically.</p>
                `
            },
            "Unit 2: Why do I act the way I do?": {
                tags: ["identity", "psychoanalysis", "id", "Freud"],
                content: `
                    <h2>2.1: Identity</h2>
                    <p><strong>Personality</strong>: an individual's pattern of thinking, feeling, and acting</p>

                    <h3>Psychoanalytic Perspective (Freud)</h3>
                    <p>Focuses on unconsciouns mind and childhood experiences and sex and aggression</p>
                    <p><strong>Free association</strong>: method of exploring unconscious where person relaxes and says whatever comes to mind</p>
                    <p><strong>Unconscious</strong></p>: unconscious unacceptable thoughts, feelings, and memories that we are unaware of</p>
                    <div>
                        <div>
                            <p><strong>Id</strong></p>
                            <p>Unconscious psychic energy satisfying sex & aggression and immediate please</p>
                        </div>
                        <div>
                            <p><strong>Superego</strong></p>
                            <p>Partly conscious mind representing internal ideals and judgement/conscience for future</p>
                        </div>
                        <div>
                            <p><strong>Ego</strong></p>
                            <p>Partly conscious executive personality balancing id, superego, and reality satisying id's desire in a reasonable way.</p>
                        </div>
                    </div>

                    <p><strong>Freudian Defense Mechanisms</strong></p>
                    <p>Ego's protective methods of reducing anxiety by unconsciously distorting reality</p>
                    <div>
                        <div>
                            <p><strong>Repression</strong></p>
                            <p>Ignore negative thoughts/feelings/memories from consciousness</p>
                        </div>
                        <div>
                            <p><strong>Regression</strong></p>
                            <p>Revert to earlier stage of development (like childhood) when faced w stress/anxiety</p>
                        </div>
                        <div>
                            <p><strong>Reaction Foramtion</strong></p>
                            <p>Behaving in a way opposite to true feelings/impulses to hide them</p>
                        </div>
                        <div>
                            <p><strong>Projection</strong></p>
                            <p>Attributing unwanted thoughts/feelings/motives to someone else</p>
                        </div>
                        <div>
                            <p><strong>Rationalization</strong></p>
                            <p>Creating logical explanation to justify guilty or shameful thoughts/feelings</p>
                        </div>
                        <div>
                            <p><strong>Displacement</strong></p>
                            <p>Redirecting emotions from real source to safer/less threatening target</p>
                        </div>
                        <div>
                            <p><strong>Denial</strong></p>
                            <p>Refusing to accept reality/facts bc too uncomfortable or distressing to face</p>
                        </div>
                        <div>
                            <p><strong>Sublimation</strong></p>
                            <p>Channeling unacceptable impulses/feelings into socially acceptable ones</p>
                        </div>
                    </div>

                    <p><strong>Psychoanalytic Personality Tests (Projective Tests)</strong></p>
                    <div>
                        <div>
                            <p><strong>Projective Test</strong></p>
                            <p>Provide ambiguous images to trigger projecting inner thoguhts and explore unconscious mind</p>
                        </div>
                        <div>
                            <p><strong>Thematic Apperception Test (TAT)</strong></p>
                            <p>Projective test where ppl express inner feelings/interests through stories they make up about ambiguous scenes</p>
                        </div>
                        <div>
                            <p><strong>Rorschach Inkblot Test</strong></p>
                            <p>Projective test seeking to identify people's inner feelings by analyzing how they interpret inkblots</p>
                        </div>
                    </div>

                    <h3>Humanistic Perspective (Maslow and Rogers)</h3>
                    <p><strong>Self-Actualization:</strong> closing gap between real and ideal self</p>
                    <p><strong>Maslow's Hierarchy of Needs</strong>: physiological needs like food/water, then safety needs like nurture/money, then belonginess/love needs like acceptance/affection, then esteem needs like respect, then self-actualization</p>
                    <p><strong>Unconditional positive regard:</strong>: caring non-judgemental attitude helping develope selfawareness and selfacceptance</p>
                    
                    <h3>Trait Perspective</h3>
                    <p><strong>Trait:</strong> characteristic behavior pattern or disposition to feel/act certain ways according to self and peer reports inventories</p>>
                    <p><strong>Inventories/Tests</p>
                    <div>
                        <div>
                            <p><strong>Factor Analysis</strong></p>
                            <p>Identifying clusters of related items/facters to identify dimensions of performance underlying total score</p>
                        </div>
                        <div>
                            <p><strong>Personality Inventory</strong></p>
                            <p>Questionnaire w/ true/false or agree/disagree items where people respond to assess selected personality traits and guage wide range of feelings/behaviors</p>
                        </div>
                        <div>
                            <p><strong>Id</strong></p>
                            <p>Unconscious psychic energy satisfying sex & aggression and immediate please</p>
                        </div>
                        <div>
                            <p><strong>Minnesota Multiphasic Personality Inventory (MMPI)</strong></p>
                            <p>Most widely used personality test used to identify emotional disorders and other purposes</p>
                        </div>
                        <div>
                            <p><strong>Big Five Personality Factors / Five Factor Model</strong></p>
                            <p>OCEAN: openness (curiosity/imagination/openness to experience over routine), conscientousness (selfdiscipline/organization/achievement), extraversion (socialness), agreeableness (cooperation/compassion), neuroticism (emotional stability/anxiety) describing personality</p>
                        </div>
                    </div>

                    <h3>Social-Cognitive Perspective (Bandura)</h3>
                    <p>View of Behavior as influenced by interaction between traits, thinking, and social context</p>
                    <p><strong>Reciprocal determinism:</strong> interacting influences of behavior, internal cognition, and environment all connected</p>
                    <div>
                        <div>
                            <p><strong>External Locus of Control</strong></p>
                            <p>Perception that outside forces beyond personal control determine our fate</p>
                            <p>Learned Helplessness - hopelessness/pressure & feeling unable to avoid repeated aversive events</p>
                        </div>
                        <div>
                            <p><strong>Internal Locus of Control</strong></p>
                            <p>Perception that we control our own fate</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p><strong>High Self-Efficacy</strong></p>
                            <p>Person's strong belief in their ability to succeed at a specific test/situation</p>
                        </div>
                        <div>
                            <p><strong>Low Self-Efficacy</strong></p>
                            <p>Person's belief they are not capable at succeeding at a specific task or situation</p>
                        </div>
                    </div>

                    <h3>Social-Emotional Development</h3>
                    <p><strong>Adverse Childhood Experiences (ACEs)</strong>: potentially traumatic/stressful event occuring before 18 like abuse/neglect harming development and increasing psychological risk later in life</p>
                    <p><strong>Ecological Systems Theory</strong>: how environment influences development</p>
                    <div>
                        <div>
                            <p><strong>Microsystem</strong></p>
                            <p>Your daily world & immediate environment (ex: family, school, close friends)</p>
                        </div>
                        <div>
                            <p><strong>Mesosystem</strong></p>
                            <p>Connections between worlds and between different microsystems (ex: relationship between home/school, family&friend's families, community events)</p>
                        </div>
                        <div>
                            <p><strong>Exosystem</strong></p>
                            <p>Bigger community and external environment indirectly influencing development (ex: neighborhood, parent's workplace, extended family, gov policies)</p>
                        </div>
                        <div>
                            <p><strong>Macrosystem</strong></p>
                            <p>Wider world and broader sociocultural influences shaping individual experiences and influences children's behavior and parent styles (ex: economic conditions, culture/traditions, media, current events, social norms)</p>
                        </div>
                        <div>
                            <p><strong>Chronosystem</strong></p>
                            <p>Changes over time reflecting changes/traditions in life (ex: moving, divorce, family changes, historical events, societal changes)</p>
                        </div>
                    </div>
                    <p><strong>Identity Statuses Theory (James Marcia)</strong>: identity development based on exploration and commital</p>
                    <div>
                        <div>
                            <p><strong>Achievement</strong></p>
                            <p>High exploration, high commitment</p>
                            <p>Most stable identity</p>
                        </div>
                        <div>
                            <p><strong>Diffusion</strong></p>
                            <p>No/low exploration, no/low commitment</p>
                            <p>Least stable identity</p>
                        </div>
                        <div>
                            <p><strong>Foreclosure</strong></p>
                            <p>No/low exploration, high committment</p>
                            <p>Usually adopting other's experiences without forming/exploring their own</p>
                        </div>
                        <div>
                            <p><strong>Moratorium</strong></p>
                            <p>High exploration, no commitment</p>
                            <p>Exploring themselves but unsure/uncommitted</p>
                        </div>
                    </div>
                    <p><strong>Vygotsky's Zone of Proximal Development</strong>: range of tasks kid can't do alone but can do w help from a more skilled person (gap between what they can do and what they can achieve w guidance)</p>
                    <p><strong>Parenting Styles</strong></p>
                    <div>
                        <div>
                            <p><strong>Authoritarian</strong></p>
                            <p>High control low support</p>
                            <p>Strict controlling parents expecting obedience and setting many rules w little warmth to child's needs, lots of punishment</p>
                        </div>
                        <div>
                            <p><strong>Permissive/Indulgent</strong></p>
                            <p>Low control high support</p>
                            <p>Warm/loving parents w few rules/limits allowing lots of freedom w little discipline</p>
                        </div>
                        <div>
                            <p><strong>Authoritative</strong></p>
                            <p>High control high support</p>
                            <p>Warm/supportive yet firm w clear rules/expectiations but still supportive and encouraging independcen</p>
                        </div>
                        <div>
                            <p><strong>Uninvolved/Neglectful</strong></p>
                            <p>Low support low control</p>
                            <p>Too busy to come up with rules or give love</p>
                        </div>
                    </div>

                    <h3>Erickson's Stages of Social Development</h3>
                    <p>He was a psychodynamic psychologist</p>
                    <p>Explains how social/emotional development occurs across life stages w/ conflicts</p>
                    <div>
                        <div>
                            <p><strong>Trust vs Mistrust (0-1)</strong></p>
                            <p>Is the world predictable and supportive?</p>
                        </div>
                        <div>
                            <p><strong>Autonomy vs Shame/Doubt (2-3)</strong></p>
                            <p>Am I self-sufficient or must I rely on others?</p>
                        </div>
                        <div>
                            <p><strong>Initiative vs Guilt (3-6)</strong></p>
                            <p>Am I good or bad? Will I feel guilty for trying new things?</p>
                        </div>
                        <div>
                            <p><strong>Industry vs Inferiority (7-12)</strong></p>
                            <p>Am I successful or am I worthless? How can I function in comparison to others?</p>
                        </div>
                        <div>
                            <p><strong>Identity vs Public Confession/Role Confusion (12-18)</strong></p>
                            <p>Who am I? What is my place in society?</p>
                        </div>
                        <div>
                            <p><strong>Intimacy vs Isolation (20-30)</strong></p>
                            <p>Am I able to become close with others, but still maintain my sense of self?</p>
                        </div>
                        <div>
                            <p><strong>Generativity vs Stagnation (30-50)</strong></p>
                            <p>Am I able to give love and attention beyond myself? Have I nurtured the next generation?</p>
                        </div>
                        <div>
                            <p><strong>Integrity vs Despair (50+)</strong></p>
                            <p>How do I deal with the end of my career? Am I still useful? How do I cope with loss?</p>
                        </div>
                    </div>

                    <h3>Sex, Gender, Sexuality</h3>
                    <ul>
                        <li>Sex is defined by biology, gender is defined by one's experience, sexuality is based on attraction</li>
                        <li>Gender identity is subjective sense of gender</li>
                        <li>Gender expression is how gender is displayed</li>
                        <li>Cisgender is when biology & psychology is male or female</li>
                        <li>Dysphoria is discomfort between biology/psychology</li>
                        <li>Gender nonconforming - behavior not fitting your gender</li>
                        <li>Androgynous - gender neutral</li>
                        <li>Pansexual - attraction to all sexes</li>
                    </ul>

                    <h2>2.2: Social Psych</h2>
                    <p>Scientific study of how we think about, influence, and relate to each other</p>
                    <h3>Social Thinking</h3>
                    <p><strong>Attribution Theory</strong>: theory we explain behavior by crediting either the situation (situational attribution) or the person's stable enduring traits (dispositional attribution)</p>
                    <p><strong>Fundamental Attribution Error</strong>: tendency for observors to underestimate impact of situation and overestimate personal dispotion when analyzing other people's behavior</p>
                    <p><strong>Foot-in-the-door Phenomenon</strong>: people who first agreed w smaller request later comply w larger request</p>
                    <p><strong>Zimbardo's Prison Experiment</strong>: unethical study where students acts as guards in a fake prison showing how powerful structural roles shapes behavior</p>
                    <p><strong>Cognitive Dissonance Theory</strong>: 
                    
                `
            }
        }
    }
};

// functionality for switching between units &stuff
let currentClass = null;
let currentUnit = null;

function init() {
  const classList = document.getElementById('classList');
  Object.keys(NOTES).forEach(cls => {
    const btn = document.createElement('button');
    btn.className = 'class-btn';
    btn.innerHTML = `<span class="class-dot"></span>${cls}`;
    btn.onclick = () => selectClass(cls);
    classList.appendChild(btn);
  });
}

function selectClass(cls) {
  currentClass = cls;
  document.querySelectorAll('.class-btn').forEach(b => {
    b.classList.toggle('active', b.textContent.trim() === cls);
  });
  document.getElementById('bc-class').textContent = cls;

  const unitList = document.getElementById('unitList');
  unitList.innerHTML = '';
  const units = Object.keys(NOTES[cls].units);
  units.forEach(unit => {
    const btn = document.createElement('button');
    btn.className = 'unit-btn';
    btn.textContent = unit;
    btn.onclick = () => selectUnit(cls, unit);
    unitList.appendChild(btn);
  });

  if (units.length > 0) selectUnit(cls, units[0]);
}

function selectUnit(cls, unit) {
  currentUnit = unit;
  document.querySelectorAll('.unit-btn').forEach(b => {
    b.classList.toggle('active', b.textContent === unit);
  });

  document.getElementById('bc-class').textContent = cls;

  renderNotes(cls, unit);
}

function renderNotes(cls, unit) {
  const data = NOTES[cls].units[unit];
  const body = document.getElementById('notesBody');

  const tagsHtml = (data.tags || []).map(t => `<span class="tag">${t}</span>`).join('');

  body.innerHTML = `
    <div class="note-header">
      <h1>${unit}</h1>
      <div class="note-meta">
        <span>${cls}</span>
        <span class="note-meta-sep">|</span>
        <span>study notes</span>
      </div>
      <div class="tags-row">${tagsHtml}</div>
      <div class="divider"></div>
    </div>
    <div class="note-content">${data.content}</div>
  `;

  applyAutoStylingTags();
  buildOutline();
  body.scrollTop = 0;
}

function applyAutoStylingTags() {
  const content = document.querySelector('.note-content');
  if (!content) return;

  const divs = Array.from(content.querySelectorAll('div'));

  divs.forEach(div => div.classList.add('note-auto-box'));

  divs.forEach(div => {
    const directChildren = Array.from(div.children);
    const childDivs = directChildren.filter(child => child.tagName === 'DIV');
    const nonDivChildren = directChildren.filter(child => child.tagName !== 'DIV');

    const hasOnlyDivChildren = childDivs.length > 0 && nonDivChildren.length === 0;
    const hasMixedChildren = childDivs.length > 0 && nonDivChildren.length > 0;
    const hasNoDivChildren = childDivs.length === 0;

    if (hasOnlyDivChildren && childDivs.length >= 2) {
      div.classList.add('note-auto-grid');
      childDivs.forEach(child => child.classList.add('note-auto-card'));
      return;
    }

    if (hasMixedChildren) {
      div.classList.add('note-auto-panel');
      childDivs.forEach(child => child.classList.add('note-auto-card'));
      return;
    }

    if (hasNoDivChildren) {
      div.classList.add('note-auto-card');
    }
  });
}

function buildOutline() {
  const body = document.getElementById('notesBody');
  const outlineList = document.getElementById('outlineList');
  outlineList.innerHTML = '';

  const headings = body.querySelectorAll('.note-content h2, .note-content h3, .note-content h4');

  if (headings.length === 0) {
    outlineList.innerHTML = '<div style="padding:0 16px;font-size:11px;color:var(--ink3);font-family:var(--mono)">no headings found</div>';
    return;
  }

  headings.forEach((el, i) => {
    if (!el.id) el.id = 'heading-' + i;

    const btn = document.createElement('button');
    if (el.tagName === 'H2') btn.className = 'ol-h2';
    else if (el.tagName === 'H3') btn.className = 'ol-h3';
    else btn.className = 'ol-h4';

    btn.textContent = el.textContent;
    btn.onclick = () => {
      const nb = document.getElementById('notesBody');
      const elTop = el.getBoundingClientRect().top;
      const nbTop = nb.getBoundingClientRect().top;
      nb.scrollBy({ top: elTop - nbTop - 16, behavior: 'smooth' });
    };
    btn.setAttribute('data-id', el.id);
    outlineList.appendChild(btn);
  });
}

function updateScrollSpy() {
  const body = document.getElementById('notesBody');
  const headings = body.querySelectorAll('.note-content h2, .note-content h3, .note-content h4');
  let current = null;

  headings.forEach(h => {
    if (h.getBoundingClientRect().top < 160) current = h.id;
  });

  document.querySelectorAll('.ol-h2, .ol-h3, .ol-h4').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-id') === current);
  });
}

function handleSearch() {
  const q = document.getElementById('searchInput').value.trim().toLowerCase();
  if (!q) return;

  const results = [];
  Object.entries(NOTES).forEach(([cls, clsData]) => {
    Object.entries(clsData.units).forEach(([unit, unitData]) => {
      const combined = (unit + ' ' + unitData.content).toLowerCase();
      if (combined.includes(q)) {
        results.push({ cls, unit });
      }
    });
  });

  if (results.length > 0) {
    selectClass(results[0].cls);
    selectUnit(results[0].cls, results[0].unit);
  }
}

document.getElementById('searchInput').addEventListener('keydown', e => {
  if (e.key === 'Enter') handleSearch();
});

document.getElementById('notesBody').addEventListener('scroll', updateScrollSpy);

init();